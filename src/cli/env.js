const parseEnv = () => {
    const rssRegex = /^RSS_/;
    let rssEnvArr = Array.from(Object.keys(process.env)).filter((item) => rssRegex.test(item));
    rssEnvArr = rssEnvArr.map((item) => `${item}=${process.env[item]}`);
    const rssEnvsStr = rssEnvArr.join("; ");
    console.log(rssEnvsStr);
};

parseEnv();