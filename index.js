var x = 1000;
a();
b();
console.log(x); // Output: 1000

function a() {
    var x = 10;
    console.log(x); // Output: 10
}

function b() {
    var x = 100;
    console.log(x);
}
