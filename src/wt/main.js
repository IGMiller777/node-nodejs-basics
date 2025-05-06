import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
    const CPUCoresNum = os.cpus().length;
    const result = [];
    const workers = [];

    for (let i = 0; i < CPUCoresNum; i += 1) {
        const workerPath = new URL("./worker.js", import.meta.url);
        const worker = new Worker(workerPath, {workerData: 10 + i});

        worker.on('message', (msg) => {
            result.push({status: 'resolved', msg});
        });

        worker.on('error', (err) => {
            result.push({status: 'error', err});
            console.log(err)
        });

        workers.push(worker);
    }

    await Promise.allSettled(workers.map(worker => new Promise((res) => worker.on('exit', res))));
    console.log(result);
};

await performCalculations();