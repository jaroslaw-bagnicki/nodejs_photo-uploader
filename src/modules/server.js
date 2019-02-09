import { createServer } from 'http';
import 'colors';
import '../utils/showTime';

export function start(port) {
  function onRequest(req, res) {
    console.log('Request received.'.time.yellow);
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Hello world');
    res.end();
  }

  createServer(onRequest).listen(port, () => console.log(`Server started at http://localhost:${port}`.time.blue));
}
