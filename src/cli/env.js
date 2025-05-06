const parseEnv = () => {
    let rssEnvsArr = [];

    Object.keys(process.env).forEach((key) => {
        if(key.startsWith('RSS_')) {
            rssEnvsArr.push(key);
        }
    })
};

parseEnv();