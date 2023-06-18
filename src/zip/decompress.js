import path from 'path';
import url from "url";
import gzip from "zlib";
import stream from "stream/promises";
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToDecompress = path.join(currentDirectory, "files", "archive.gz");
  const decompressedFile = path.join(currentDirectory, "files", "fileToCompress.txt");
  

  const unzip = gzip.createUnzip(); 
  await stream.pipeline(createReadStream(fileToDecompress), unzip, createWriteStream(decompressedFile));
};

await decompress();