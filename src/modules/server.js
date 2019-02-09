import { createServer } from 'http';
import 'colors';
import { getTime } from '../utils';

export function start(port) {
  function onRequest(req, res) {
    console.log(`${getTime()} Request received.`.yellow);
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Hello world');
    res.end();
  }

  createServer(onRequest).listen(port, () => console.log(`${getTime()} Server started at http://localhost:${port}`.blue));
}
