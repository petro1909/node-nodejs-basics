import { Transform } from "stream";
import stream from "stream/promises";

const transform = async () => {
  const transformedStream = new Transform({ 
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  })
  await stream.pipeline(process.stdin, transformedStream, process.stdout);
};

await transform();