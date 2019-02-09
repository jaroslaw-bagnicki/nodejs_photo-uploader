import fs from 'fs';
import { resolve } from 'path';
import { IncomingForm } from 'formidable';
import mv from 'mv';
import '../utils/showTime';
import { status, contentType } from './consts';

export function welcome(req, res) {
  console.log('Handling \'welcome\' request ...'.time.yellow);
  fs.readFile(resolve(__dirname, '../templates/start.html'), (err, html) => {
    if (err) throw err;
    res.writeHead(status.ok, contentType.html);
    res.write(html);
    res.end();
    console.log('\'start.html\' sent.'.time.yellow);
  });
}

export function upload(req, res) {
  console.log('Handling \'upload\' request ...'.time.yellow);
  const form = new IncomingForm();
  form.parse(req, (err, fields, { file }) => {
    if (err) throw err;
    mv(file.path, resolve(__dirname, '../store/', file.name), (err) => {
      if (err) throw err;
      res.writeHead(status.created, contentType.html);
      res.write('recieved image:<br/>');
      res.write(`<img src="/show/${file.name}" />`);
      res.end();
    });
  });
}

export function show(req, res, imgName) {
  console.log('Handling \'show\' request ...'.time.yellow);
  fs.readFile(resolve(__dirname, '../store/', imgName), 'binary', (err, image) => {
    if (err) throw err;
    res.writeHead(status.ok, contentType.png);
    res.write(image, 'binary');
    res.end();
    console.log('Image: test.png sent.'.time.yellow);
  });
}

export function notFound(req, res) {
  console.log('Resource Not found.'.time.red);
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
