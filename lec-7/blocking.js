const crypto = require("crypto");

console.log("Hello world");

var a = 2464551;
var b = 5454;

//pbkdf2 - Password Based Key Derivative Function.

//synchronous function-will block further execution(main thread) don't use it.
const mySyncKey = crypto.pbkdf2Sync("myPassword", "salt", 5000000, 50, "sha512");
console.log("generated key using synchronous method: ", mySyncKey.toString("hex"));

//asynchronous function. used for encryption of password
crypto.pbkdf2("myPassword", "salt", 3000000, 50, "sha512", (err, res) => {
  if (err) throw err;
  console.log(
    "Key is generated using asynchronous method: ",
    res.toString("hex")
  );
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);
