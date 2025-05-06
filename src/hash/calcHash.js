import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

const calculateHash = async () => {
    const dirname = import.meta.dirname;
    const readable = fs.createReadStream(
        path.join(dirname, 'files', 'fileToCalculateHashFor.txt')
    );
    const hash = createHash('sha256');
    readable.pipe(hash).setEncoding("hex").pipe(process.stdout);


    // const hash = crypto.createHash('sha256')
    // const fileStream = fs.createReadStream('./files/fileToCalculateHashFor.txt');
    //
    // fileStream.on('data', (chunk) => {
    //     const crypted = hash.update(chunk, 'utf8');
    //
    //     console.log(crypted);
    // });
    //
    // fileStream.on('error', (err) => {
    //     console.log(err);
    // })
    //
    // fileStream.on('end', () => {
    //     console.log(hash.digest('hex'));
    // })

    // Write your code here 
};

await calculateHash();