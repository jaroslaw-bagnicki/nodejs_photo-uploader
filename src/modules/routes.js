import fs from 'fs';
import { resolve } from 'path';
import '../utils/showTime';
import { status, contentType } from './consts';

export function welcome(req, res) {
  console.log('Handling \'welcome\' request ...'.time.yellow);
  fs.readFile(resolve(__dirname, '../templates/start.html'), function(err, html) {
    if (err) throw err;
    res.writeHead(status.ok, contentType.html);
    res.write(html);
    res.end();
    console.log('\'start.html\' sent.'.time.yellow);
  });
}

export function upload(req, res) {
  console.log('Handling \'upload\' request ...'.time.yellow);
  res.writeHead(status.accepted, contentType.text);
  res.write('Upload started!');
  res.end();
}

export function notFound(req, res) {
  console.log('Invalid url'.time.yellow);
  res.writeHead(status.notFound);
  res.write('404 :(');
  res.end();
}

export function favicon(req, res) {
  console.log('Handling \'favicon\' request ...'.time.yellow);
  fs.readFile(resolve(__dirname, '../favicon.png'), function(err, icon) {
    if (err) throw err;
    res.writeHead(status.ok, contentType.png);
    res.write(icon);
    res.end();
    console.log('Favicon sent.'.time.yellow);
  });
}
