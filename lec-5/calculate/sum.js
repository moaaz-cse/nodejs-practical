//module protects their varible and function from leaking.

console.log("Sum module executed");
let x = "Hello world";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = { x, calculateSum };
