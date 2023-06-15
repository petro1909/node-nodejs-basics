import stream from "stream/promises";
import fs from "fs";
import path from 'path';
import url from "url";

const write = async () => {
    const currentDirectory = path.dirname(url.fileURLToPath(import.meta.url));
    const fileToRead = path.join(currentDirectory, "files", "fileToWrite.txt");

    const streamTo = fs.createWriteStream(fileToRead);
    await stream.pipeline(process.stdin, streamTo);
};

await write();