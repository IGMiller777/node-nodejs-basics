import { createReadStream, createWriteStream } from 'node:fs';
import process from 'process';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const unzip = createGunzip();
    const source =  createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');

    await pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.log(err)
        }
    })
};

await decompress();