import * as express from 'express';
import * as cors from 'cors';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import { router as v1Router } from './v1';

const app = express();
let server: any;

app.use(cors());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.get('/api', (req, res) => {
  res.json({
    health: 'OK'
  });
});

app.use('/api/v1', v1Router);

server = app.listen(3000);

process.on('SIGTERM', () => {
  if (server) {
    server.stop();
  }
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
