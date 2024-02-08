import { and } from "./and.js";
import { not } from "./not.js";
import { or } from "./or.js";
import { greater } from "./greater.js";
import { lesser } from "./lesser.js";
import { equals } from "./equals.js";
import { isError } from "./is-error.js";

console.log("and", and(true, true, false)); // false

console.log("or", or(true, true, false)); // true

console.log("not", not(true), not(false));

// example
let age = 20;
let city = "New York";
let isAuthenticated = true;

if (and(age === 20, city === "New York")) {
  console.log("it is here 1");
}

if (or(isAuthenticated, city === "New York")) {
  console.log("it is here 2");
}

console.log("greater", greater(10, 5)); // true

console.log("lesser", lesser(10, 5)); // false

console.log("equals", equals(10, 10)); // true

console.log("isError", isError(new Error())); // true

// test from github
