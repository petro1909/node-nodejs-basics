import {parentPort, workerData} from "worker_threads";
// n should be received from main thread
const nthFibonacci = (n) => { return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2); }

const sendResult = () => {
    const arg = workerData.number;
    const result = nthFibonacci(arg);
    parentPort.postMessage(result);
};

sendResult();