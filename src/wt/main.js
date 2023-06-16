import path from 'path';
import url from "url";
import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
  const processFile = path.join(currentDirectory, "worker.js");

    const cpuCores = os.cpus().length;
    const workers = [];
    for(let i = 10; i < cpuCores + 10 ; i++) {
      workers.push(new Promise((resolve) => {
        const worker = new Worker(processFile, {workerData: {number: i}});
        worker.on("error", (err) => resolve({status: 'error', data: null}));
        worker.on("message", (value) => resolve({status: 'resolved', data: value}));
      }));
    }
    const workerResults = await Promise.all(workers);
    workerResults.forEach((element) => {
      console.log(element);
    });
};

await performCalculations();