import * as fs from 'fs';

const read = async () => {
    const path = './files/fileToRead.txt';
    if(!fs.existsSync(path)) {
        throw Error('FS operation failed')
    } else {
        // const readableStream = fs.createReadStream(path);
        //
        // readableStream.on('data', (chunk) => {
        //     console.log(chunk.toString());
        // })
        //
        // readableStream.on('error', (err) => {
        //     console.log(err);
        // })
        fs.readFile(path,  (err, data) => {
            console.log(data.toString());
        })
    }
};

await read();
//read.js - implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)