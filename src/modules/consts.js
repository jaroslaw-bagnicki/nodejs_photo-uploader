import { resolve } from 'path';

export const STORE_PATH = resolve(__dirname, '../../store');

export const status = {
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405
};

export const contentType = {
  text: {'Content-Type': 'text/plain; charset=utf-8'},
  html: {'Content-Type': 'text/html; charset=utf-8'},
  icon: {'Content-Type': 'image/x-icon'},
  png: {'Content-Type': 'image/png'},
  jpg: {'Content-Type': 'image/jpeg'}
};
