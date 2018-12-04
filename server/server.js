const express = require('express');
const app = express();
const shortid = require('shortid');

// start of the our poverty DB 
// fs is file system that allows for api interacting with files

// converts to useable JS using JSON formatting
const fs = require('fs');

function readData() {
    const data = fs.readFileSync('./data/grapplers.json', 'utf8');
    return JSON.parse(data);
}
//converts into JSON format to be saved

function saveData(grapplers) {
    const json = JSON.stringify(grapplers, true, 2);
    json.writeFileSyn('./data/grapplers.json', json);
}

// end of DB stuff