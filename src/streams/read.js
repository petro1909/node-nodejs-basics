import stream from "stream/promises";
import fs from "fs";
import path from 'path';
import url from "url";

const read = async () => {
  const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToRead = path.join(currentDirectory, "files", "fileToRead.txt");

  const streamFrom = fs.createReadStream(fileToRead);
  await stream.pipeline(streamFrom, process.stdout);
};

await read();