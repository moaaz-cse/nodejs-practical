{
  //require("./xyz");
  // import { calculateSum } from "./sum.js"; //mjs module import method
  // require("./sum"); not work like this
  // const { x, calculateSum } = require("./calculate/sum"); //cjs import method
  // const { multiply } = require("./calculate/multiply");
}

const { calculateSum, multiply } = require("./calculate"); //no need to write "./calculate/index" as index will be take by default
const data = require("./data.json");
var name = "moaaz ahmed";
var a = 10;
var b = 20;
calculateSum(a, b);
console.log(name);
multiply(a, b);
console.log(data); 

// console.log(x);
// console.log(a + b);

// console.log(global);
// console.log(globalThis);
// console.log(this);//this is an empty object initially

//in browser-> window,this,shelf,frame. all these give same result.That is windows object
