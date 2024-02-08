import { and } from "./and";
import { not } from "./not";
import { or } from "./or";

console.log("and", and(true, true, false)); // false

console.log("or", or(true, true, false)); // true

console.log("not", not(true), not(false));
