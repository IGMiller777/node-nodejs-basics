import { rename } from 'node:fs/promises'
import { join } from 'node:path';

const dirname = import.meta.dirname;

const oldFilePath = join(dirname, "files", 'wrongFilename.txt' );
const newFilePath = join(dirname, "files", 'properFilename.txt' );

const rename = async () => {
    try {
        await rename(oldFilePath, newFilePath);
    }

    // if (fs.existsSync('files/properFilename.md')) {
    //     throw Error('FS  operation failed must be thrown');
    // } else {
    //     fs.rename('files/wrongFilename.txt', 'files/properFilename.md', (err) => {
    //         console.error(err)
    //     })
    // }
};

await rename();

//rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS
// operation failed must be thrown)