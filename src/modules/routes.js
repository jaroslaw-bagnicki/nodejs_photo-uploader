import '../utils/showTime';
import { status, contentType } from './consts';

export function upload(req, res) {
  console.log('Handling \'upload\' request ...'.time.yellow);
  res.writeHead(status.accepted, contentType.text);
  res.write('Upload started!');
  res.end();
}

export function welcome(req, res) {
  console.log('Handling \'welcome\' request ...'.time.yellow);
  res.writeHead(status.ok, contentType.text);
  res.write('Welcome!');
  res.end();
}

export function notFound(req, res) {
  console.log('Invalid url'.time.yellow);
  res.writeHead(status.notFound);
  res.write('404 :(');
  res.end();
}
