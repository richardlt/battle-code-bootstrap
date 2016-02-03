'use strict';

const B = require('../bootstrap.js');

B.readFile('./files/one.file.txt');

let N = parseInt(B.readLine());

for (let i = 0; i < N; i++) {
    B.print(B.readLine());
}
