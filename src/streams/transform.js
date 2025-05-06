import { pipeline, Transform } from 'stream';
import process from "process";

const transform = async () => {
    const revertStrTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join('').toUpperCase().trim() + "\n");
            callback();
        }
    });

    pipeline(process.stdin, revertStrTransform, process.stdout, (err) => {
        console.log(err)
    } )

    // const reverseTransform = new Transform({
    //     transform(chunk, encoding, callback) {
    //         try {
    //             chunk = chunk.toString().split('').reverse().join('');
    //             this.push(chunk);
    //         } catch (e) {
    //             this.emit('error', e);
    //         }
    //
    //         callback();
    //     }
    // })
    //
    //
    // process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();