import fs from "fs/promises";
import path from "path";
import url from "url";

const create = async () => {

  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const createFileName = "fresh.txt";
  const createdFilePath = path.join(current_dirname, "files", createFileName);  
  const data = "I am fresh and young";
  
  try {
    await fs.writeFile(createdFilePath, data, { flag: "wx" });
  } catch(err) {
    throw new Error(`Error: FS operation failed: file with name ${createFileName} already exist`);
  }
};

await create();