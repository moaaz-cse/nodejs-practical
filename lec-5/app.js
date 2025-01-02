const { calculateSum, multiply } = require("./calculate"); //no need to write "./calculate/index" as index will be take by default
const data = require("./data.json");
var name = "moaaz ahmed";
var a = 10;
var b = 20;
calculateSum(a, b);
console.log(name);
multiply(a, b);
console.log(data);
