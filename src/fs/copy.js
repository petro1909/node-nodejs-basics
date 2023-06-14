import fs from "fs/promises";
import path from "path";
import url from "url";

const copy = async () => {
  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const copyFromFilePath = path.join(current_dirname, "files");
  const copyToFilePath = path.join(current_dirname, "files_copy");
  try {
    await fs.cp(copyFromFilePath, copyToFilePath, {force: false, errorOnExist: true, recursive: true}); 
  } catch(err) {
    throw new Error(`Error: FS operation failed`);
  }
};

await copy();
