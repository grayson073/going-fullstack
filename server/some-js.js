const fs = require('fs');

const x = 12;
const y = 3;

console.log('hello, I am JS running in node', x + y);

fs.writeFileSync('hello.txt', 'I am some text for the file');