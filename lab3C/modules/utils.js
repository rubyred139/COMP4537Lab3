const fs = require('fs');
const path = require('path');

function readFile(file) {

    return fs.readFileSync(file, 'utf8');
}

function writeFile(file, line) {
    fs.appendFileSync(file, line + '\n');
}

module.exports = {readFile, writeFile}