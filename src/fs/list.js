import fs from "fs/promises";
import path from "path";
import url from "url";

const list = async () => {
  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filesPath = path.join(current_dirname, "fils");
  try {
    const files = await fs.readdir(filesPath, {encoding: "utf-8", withFileTypes: false});
    files.forEach(element => {
      console.log(element);  
    });
  } catch(err) {
    throw new Error("FS operation failed");
  }
 
};

await list();