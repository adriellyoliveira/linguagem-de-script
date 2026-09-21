let a = 10;
let b = 20;

aux = a;
a = b;
b = aux;

console.log("b =", a);
console.log("a =", b);


console.log("a =+ 1 => a = a + 1 =", a += 1);
console.log("a =", a = b);
console.log("b =", b = a);
