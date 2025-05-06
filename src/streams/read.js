import fs from 'fs';
import process from 'process';
import path from 'path';

const dirname = import.meta.dirname;

const read = async () => {
    const stream = fs.createReadStream(path.join(dirname, 'files', 'fileToRead.txt'));
    stream.pipe(process.stdout);
};

await read();