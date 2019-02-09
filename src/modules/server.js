import url from 'url';
import { createServer } from 'http';
import 'colors';
import '../utils/showTime';
import * as routes from './routes';

export function start(port) {
  function onRequest(req, res) {
    console.log(`Received request on url: ${req.url}`.time.yellow);
    const pathArr = url.parse(req.url).pathname.split('/').slice(1);
    switch (pathArr[0]) {
      case '':
      case 'start':
        routes.welcome(req, res);
        break;
      case 'upload':
        routes.upload(req, res);
        break;
      case 'show':
        routes.show(req, res, pathArr[1]);
        break;   
      case 'favicon.png':
        routes.favicon(req, res);
        break;
      default:
        routes.notFound(req, res);
    }
  }

  createServer(onRequest).listen(port, () => console.log(`Server started at http://localhost:${port}`.time.blue));
}
