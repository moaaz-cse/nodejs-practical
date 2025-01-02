const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 102487;
var b = 1545;

//asynchronous function
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimout called after 5 seconds");
}, 5000);

//synchronous function
fs.readFileSync("./file.txt", "utf-8");//100ms around, will block the synchrounous way, as a developer we should never use this type of code.
console.log("This will execute only after file read.");//will be run only after above line will run.

//asynchronous function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("value of C: ", c);
