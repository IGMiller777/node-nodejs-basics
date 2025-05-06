import { join } from 'node:path';
import { access, writeFile, constants } from 'node:fs';
import { writeFile as promisesWriteFile } from 'node:fs/promises';

const dirname = import.meta.dirname;

const create = async () => {
    const filepath = join(dirname, "files", 'fresh.txt');

    access(filepath, constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }

        writeFile(
            filepath,
            'I am fresh and young',
            {encoding: 'utf8'},
            (err2) => {
                if (err2) {
                    throw new Error(err2);
                }
            }
        )
    });

    // fs.stat('files/fresh.txt', (err, stat) => {
    //     if (stat) {
    //         throw Error('FS operation failed');
    //     } else {
    //         writeData();
    //     }
    // });
    //
    // const writeData = () => {
    //     const data = 'I am fresh and young';
    //
    //     fs.writeFile('files/fresh.txt', data, (err) => {
    //         if (err) throw err;
    //     });
    // }
};

await create();

const filepath = join(dirname, "files", 'fresh.txt');


const promisedBasedCreate =  async () => {
    try {
        await promisesWriteFile(filepath, 'I am fresh and young', { encoding: 'utf8', flag: 'wx' });
    } catch (error) {
        throw new Error('FFFS');
    }
}

await promisedBasedCreate();