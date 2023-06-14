import fs from "fs/promises";
import path from "path";
import url from "url";

const remove = async () => {
  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const removableFilePath = path.join(current_dirname, "files/fileToRemove.txt");
  try {
    await fs.rm(removableFilePath); 
  } catch(err) {
    throw new Error("FS operation failed");
  }
  
};

await remove();