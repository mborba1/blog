const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt' )

// readStream.on('data', (chunk) =>{
//     console.log("---- NEW CHUNk ----")
//     // console.log(chunk.toString());//use the toString() oe the uft8 encoding above 
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });

//using pipiing to send from read stream to write stream

readStream.pipe(writeStream)

