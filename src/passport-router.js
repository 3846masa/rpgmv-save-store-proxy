import { Router } from 'express';
import passport from 'passport';
import { DigestStrategy } from 'passport-http';

const USERNAME = process.env.USERNAME || 'user';
const PASSWORD = process.env.PASSWORD || 'password';

passport.use(new DigestStrategy(
  { qop: '認証 Authenticate' },
  authenticate,
  (params, done) => done(null, true)
));

function authenticate(username, done) {
  if (username !== USERNAME) done(null, false);
  else done(null, username, PASSWORD);
}

let router = Router();
router.use(passport.initialize());
router.use(passport.session());
router.use((req, res, next) => {
  if (
    req.url.match(/^\/api\//) ||
    req.url.match(/\/$/) ||
    req.url.match(/\/index\..*?$/)
  ) {
    passport.authenticate('digest', { session: false })(req, res, next);
  } else {
    next();
  }
});

export default router;
