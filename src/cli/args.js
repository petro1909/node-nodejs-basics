const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const argsStrArray = [];
    for(let i = 0, j = 0; i < argsArr.length; i += 2, j++) {
      argsStrArray[j] = `${argsArr[i]} is ${argsArr[i + 1]}`;
    }
    const argsStr = argsStrArray.join(", ");
    console.log(argsStr);
};

parseArgs();