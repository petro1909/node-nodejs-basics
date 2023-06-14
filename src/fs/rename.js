import fs from "fs/promises";
import path from "path";
import url from "url";

async function isFileExist(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch(err) {
    return false;
  }
}

const rename = async () => {
  const current_dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const renameFilePath = path.join(current_dirname, "files", "wrongFilename.txt");
  const renamedFilePath = path.join(current_dirname, "files", "properFilename.md");

  if (await isFileExist(renameFilePath) === false) {
    throw new Error("FS operation failed");
  }

  if (await isFileExist(renamedFilePath)) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.rename(renameFilePath, renamedFilePath);
  } catch(err) {
    throw new Error("FS operation failed");
  }
};

await rename();

