import fs from "fs/promises";
import path from "path";
import url from "url";

const read = async () => {
  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const readFilePath = path.join(current_dirname, "files/fileToRead.txt");
  try {
    const fileContent = await fs.readFile(readFilePath, {encoding: "utf-8", flag: "r"}); 
    console.log(fileContent);
  } catch(err) {
    throw new Error("FS operation failed");
  }
};

await read();