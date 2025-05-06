import * as fs from 'fs';

const list = async () => {
    const fileNames = [];

    if(!fs.existsSync('files')) {
        throw Error('FS operation failed')
    } else {
        fs.readdirSync('files').forEach((e) => fileNames.push(e));
    }

    console.log(fileNames);
};

await list();

// list.js - implement function that prints array of all filenames from files folder into console
// (if files folder doesn't exists Error with message FS operation failed must be thrown)