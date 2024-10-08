const fs = require("fs");
const path = require("path");

const myFunction = (dirName, ext, callback) => {
    fs.readdir(dirName, (err, data) => {
        if (err) {
            return callback(err);
        }

        const result = data.filter((fileName) => {
            const arrFileName = fileName.split(".");
            return arrFileName.length > 1 && "." + ext === path.extname(fileName);
        });

        callback(null, result);
    });
};

module.exports = myFunction;