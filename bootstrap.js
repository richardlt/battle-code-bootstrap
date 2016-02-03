'use strict';

const fs = require('fs'),
    Optimist = require('optimist');

const arg = Optimist.argv;

let _file = [];
let _index = 0;

module.exports = {

    readFile: function(path) {
        _index = 0;
        const file = fs.readFileSync(path, 'utf8');
        _file = file.split('\n');
        return file;
    },

    readLine: function() {
        let line = '';
        if (_file && 0 < _file.length) {
            line = _file[_index];
            _index++;
        }
        return line;
    },

    print: function(value) {
        console.log(value)
    },

    printErr: function(value) {
        console.error(value);
    }

};
