import { join } from 'node:path';
import { access, writeFile, constants } from 'node:fs';
import { readdir, mkdir, copyFile, cp } from 'node:fs/promises';

const dirname = import.meta.dirname;
const filePath = join(dirname, "files");
const filesCopyPath = join(dirname, "files_copy");

const copyByPromisedAPI = async () => {
    try {
        const [files] = await Promise.all([
            readdir(filePath),
            mkdir(filesCopyPath)
        ]);

        await Promise.all(
            files.map(async (file) => {
                const sourcePath = join(filePath, file);
                const destPath = join(filesCopyPath, file);

                await copyFile(sourcePath, destPath)
            })
        )
    } catch (error) {
        console.log(error)
    }
}

const copy = async () => {
    access(filePath, constants.F_OK, (err) => {
        if(err) throw new Error(err.message);

        access(filesCopyPath, constants.F_OK, async (erre) => {
            if(!erre) throw new Error(err.message);

            await createFilesCopyFolder();
        })
    })

    // const sourceDir = 'files';
    // const destinationDir = 'files-copy';
    //
    // if (fs.existsSync(destinationDir)) {
    //     throw Error('FS operation failed');
    // } else {
    //     fs.mkdirSync(destinationDir);
    //
    //     fs.cp(sourceDir, destinationDir, {recursive: true}, (err) => {
    //         if (err) {
    //             console.error(err);
    //         }
    //     })
    // }
};

const createFilesCopyFolder = async () => {
    fs.mkdir(filesCopyPath, (err) => {
        if(err) throw new Error(err.message);

        fs.readdir(filePath, (err, files) => {
            files.forEach(file => {
                fs.readFile(
                    join(filePath, file),
                    { encoding: 'utf8' },
                    (err3, data) => {
                        if(err3) throw new Error(err.message);

                        fs.writeFile(join(filesCopyPath, file), data, (err4) => {
                            if(err4) throw new Error(err.message);
                        })
                    }
                )
            })
        })
    })
}

await copy();
