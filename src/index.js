import cluster from 'cluster';
import app from './app';
import { cpus } from 'os';
const CPU_NUM = cpus().length;
const PORT = process.env.PORT || 3000;

if (cluster.isMaster) {
  for (var i = 0; i < CPU_NUM; i++) {
    cluster.fork();
  }
} else {
  app.listen(PORT, '0.0.0.0', () => {});
}
