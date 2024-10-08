const pathDir = process.argv[2];
const extension = process.argv[3];

const myFunction = require("./mymodule");

myFunction(pathDir, extension, (err, result) => {
    err ? console.error(err) : console.log(result.join("\n"))
});