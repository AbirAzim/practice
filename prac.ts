type dateProps = keyof Date & string;

let a = { a: { b: [2, 3, 'foo', null, false] }, 1: false };

console.log(typeof a);

type b = typeof a;

type c = keyof typeof a; // is equ c = 'a' | 1

let d: c = 1;

const fun = (k: c) => console.log(k);

fun('a');
