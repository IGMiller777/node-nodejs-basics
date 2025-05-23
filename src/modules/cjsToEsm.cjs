import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import 'files/c.cjs';

const random = Math.random();
const dirname = import.meta.dirname;
const filename = import.meta.filename;

let unknownObject;

if (random > 0.5) {
    await import('./files/a.json', { with: {type: 'json'}});
} else {
    await import('./files/b.json', { with: {type: 'json'}});

}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {myServer, unknownObject};

