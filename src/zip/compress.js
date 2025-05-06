import {createReadStream, createWriteStream} from 'node:fs';
import process from 'process';
import {createGzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import path from 'path';

const dirname = import.meta.dirname

const compress = async () => {
    const readable = createReadStream(path.join(dirname, 'files', 'fileToCompress.txt'));
    const writable = createWriteStream(path.join(dirname, 'files', 'archive.gz'));

    await pipeline(readable, createGzip(), writable, (err) => {
        if (err) {
            console.log(err);
            process.exitCode = 1;
        }
    })
};

await compress();