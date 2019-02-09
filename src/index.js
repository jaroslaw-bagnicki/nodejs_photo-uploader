import * as server from './modules/server';
import getPort from 'get-port';

const port = (async () => await getPort({port: [8080, 8081, 8082, 8083]}))();

(async () => server.start(await port))();
