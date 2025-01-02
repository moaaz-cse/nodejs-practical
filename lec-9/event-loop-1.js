const fs = require("fs");
const a = 100;

setImmediate(()=>{
    console.log("setImmediate");
})

fs.readFile("./file.txt","utf8",()=>{console.log("File Reading CB");
})

setTimeout(()=>{console.log("Timer Expired.");
},0)

function printA(){
    console.log("a = ",a);   
}
 
printA();

console.log("Last line of the code.");

// a =  100
// Last line of the code.
// Timer Expired. -> bcz of timer phase
// setImmediate -> bcz of check phase.
// File Reading CB ->bcz of poll phase, as file read is not done before event loop moved to check phase. Hence the file read is done in 2nd cycle.
