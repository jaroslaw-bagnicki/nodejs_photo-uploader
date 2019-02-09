import { createServer } from 'http';
import 'colors';
import '../utils/showTime';
import * as routes from './routes';

export function start(port) {
  function onRequest(req, res) {
    if (req.url !== '/favicon.ico') console.log(`Received request on url: ${req.url}`.time.yellow);
    switch (req.url) {
      case '/':
      case '/start':
        routes.welcome(req, res);
        break;
      case '/upload':
        routes.upload(req, res);
        break;
      default:
        routes.notFound(req, res);
    }
  }

  createServer(onRequest).listen(port, () => console.log(`Server started at http://localhost:${port}`.time.blue));
}
