import path from 'path';
import url from "url";
import gzip from "zlib";
import stream from "stream/promises";
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    
    const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
    const fileToCompress = path.join(currentDirectory, "files", "fileToCompress.txt");
    const compressedFile = path.join(currentDirectory, "files", "archive.gz");
    

    const zip = gzip.createGzip(); 
    await stream.pipeline(createReadStream(fileToCompress), zip, createWriteStream(compressedFile));
    
};

await compress();