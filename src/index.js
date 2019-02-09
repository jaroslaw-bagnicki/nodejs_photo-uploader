import * as server from './modules/server';
import getPort from 'get-port';

// Change port to random if 8080 will be busy
const port = (async () => await getPort({port: 8080}))();

(async () => server.start(await port))();
