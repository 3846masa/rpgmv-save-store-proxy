import sourceMap from 'source-map-support';
sourceMap.install();

import Express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import passportRouter from './passport-router.js';
import mongoRouter from './mongo-router.js';
import rpgmvProxyRouter from './rpgmv-save-store-proxy.js';
import { path as APP_ROOT_PATH } from 'app-root-path';
import path from 'path';

let app = Express();

app.set('PORT', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(methodOverride());

app.use(passportRouter);
app.use(mongoRouter);
app.use(rpgmvProxyRouter);
app.use(Express.static(path.resolve(APP_ROOT_PATH, 'static')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`${err.name}: ${err.message}`);
});
app.listen(app.get('PORT'), '0.0.0.0', () => {
  console.log('Express server listening on port ' + app.get('PORT'));
});
