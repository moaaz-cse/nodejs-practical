//module protects their varible and function from leaking.

console.log("Sum module executed");

// cjs module method currently used method
let x = "Hello world";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = { x, calculateSum };

// //mjs module method will be used in future as standard practice 
// export function calculateSum(a,b){
//     const sum=a+b;
//     console.log(sum);
    
// } 