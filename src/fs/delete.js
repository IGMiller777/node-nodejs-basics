import fs, {access} from 'fs';
import {join} from 'path';

const dirname = import.meta.dirname;

const remove = async () => {
    const path = join(dirname, "files, fileToRemove")

    access(path, (err) => {
        fs.unlink(path, (err) => {
            err ? console.error(err) : console.log('SUCCESS')
        });
    });


    if (!fs.existsSync(path)) {
        throw Error(' FS operation failed must be thrown');
    } else {
        fs.unlink(path, (err) => {
            err ? console.error(err) : console.log('SUCCESS')
        });
    }
};

await remove();

//delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)