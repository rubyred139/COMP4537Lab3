const http = require("http")
const url = require("url")
const path = require("path")
const {readFile, writeFile} = require('./modules/utils');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname == "/writeFile" ) {
        const fileName = parsedUrl.query.file || "text.txt"
        const text = parsedUrl.query.text

        if(!text){
            res.statusCode = 400
            res.end("Please provide the text!")
            return
        }

        try{
            writeFile(fileName, text);
            res.statusCode = 200;
            res.end("File written successfully");
        }catch(err){
            res.statusCode = 500;
            res.end("Error writing file");
        }
    } else if (parsedUrl.pathname == "/readFile") {
        requestedFile = parsedUrl.query.file
        if(!requestedFile){
            res.statusCode = 400
            res.end("Please provide the file name!")
            return
        }

        try{
            const content = readFile(requestedFile);

            res.statusCode = 200;
            res.end(content);
        }catch(err){
            res.statusCode = 500;
            res.end("Error reading file");
        }
    }else{
        res.statusCode = 400
        res.end("Not Found")
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});