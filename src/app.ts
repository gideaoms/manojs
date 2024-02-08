import { and } from "./and";
import { not } from "./not";
import { or } from "./or";

console.log("and", and(true, true, false)); // false

console.log("or", or(true, true, false)); // true

console.log("not", not(true), not(false));

// example
let age = 20
let city = "New York"
let isAuthenticated = true

if (and(age === 20, city === "New York")) {
  console.log("it is here 1")
}

if (or(isAuthenticated, city === "New York")) {
  console.log("it is here 2")
}
