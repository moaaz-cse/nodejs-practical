const { calculateSum } = require("./sum");
const { multiply } = require("./multiply");
module.exports = { calculateSum, multiply };


//IIFE - Immediatly invoked function.
(function () {
  console.log("immediatly invoked function");
})();
