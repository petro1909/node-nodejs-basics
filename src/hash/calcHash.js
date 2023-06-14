import crypto from "crypto";
import path from 'path';
import url from "url";
import fs from "fs/promises";

const calculateHash = async () => {
  const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
  const hashedFile = path.join(currentDirectory, "files", "fileToCalculateHashFor.txt");
  let hashedFileText;
  try {
     hashedFileText = await fs.readFile(hashedFile);
  } catch(err) {
    console.log(err);
  }
  
  let hash = crypto.createHash("sha256");
  hash = hash.update(hashedFileText).digest("hex");
  console.log(`hash: ${hash}`);
};

await calculateHash();