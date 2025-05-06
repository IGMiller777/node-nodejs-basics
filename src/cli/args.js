const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const argsObj = {};

    for (let i = 0; i < argsArr.length; i++) {
        argsObj[argsArr[i]] = argsArr[i + 1];
    }
};

parseArgs();