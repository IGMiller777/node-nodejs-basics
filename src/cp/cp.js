import { fork } from "child_process";
import path from "path";

const dirname = import.meta.dirname;


const spawnChildProcess = async (args) => {
    const childProcessFilePath = path.join(dirname, 'files', 'script.js');
    const childProcess = fork(childProcessFilePath, [...args], {silent: true});

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', (err) => {
        console.error(err);
        throw err;
    })
};

spawnChildProcess(['test12', 'test34']);
