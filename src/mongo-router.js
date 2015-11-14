import { Router } from 'express';
import restify from 'express-restify-mongoose';
import mongoose from 'mongoose';

const ENV = process.env;
let mongoUrl =
  ENV.MONGO_URL ||
  ENV.MONGOLAB_URI ||
  ENV.MONGOHQ_URL ||
  ((ENV.MONGO_PORT_27017_TCP_ADDR && ENV.MONGO_PORT_27017_TCP_PORT) ?
  `mongodb://${ENV.MONGO_PORT_27017_TCP_ADDR}:${ENV.MONGO_PORT_27017_TCP_PORT}/RPGMVSave` :
  'mongodb://localhost/RPGMVSave');
console.log(mongoUrl);
mongoose.connect(mongoUrl);

let router = Router();
let saveModel = mongoose.model(
  'RPGMVSave',
  new mongoose.Schema({
    host: { type: String, required: true, unique: true },
    storage: { type: String, required: true }
  })
);
restify.serve(router, saveModel);

export default router;
