console.log("Hello World");

var a = 45641;
var b = 1044;

// offloaded to libuv - move out of the call stack.
setTimeout(() => {
  console.log("Call me ASAP");//will only be able to be executed once the call stack is empty.
}, 0);//Trust issue as it does not run after 0ms, it runs 0ms only after main thread is empty.

setTimeout(() => {
    console.log("Call me after 3 sec");//will only be able to be executed once the call stack is empty.
  }, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);
