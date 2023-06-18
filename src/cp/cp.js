import cp from "child_process"; 
import path from 'path';
import url from "url";

const spawnChildProcess = async (args) => {
  const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
  const childProcessFile = path.join(currentDirectory, "files", "script.js");  
  
  const childProcess = cp.fork(childProcessFile, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['b', 'a']);
