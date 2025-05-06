import fs from 'fs';
import process from 'process';
import path from 'path';

const dirname = import.meta.dirname;


const write = async () => {
    const writable = fs.createWriteStream(path.join(dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writable)

   //  const writableStream = fs.createWriteStream('./files/fileToWrite.txt');
   //
   // process.stdin.on('data', (chunk) => {
   //     writableStream.write(chunk.toString());
   // });
   //
   //
   // writableStream.on('error', (err) => {
   //     console.log(err)
   // })
};

await write();