import { and } from "./and";
import { not } from "./not";
import { or } from "./or";

console.log("and", and(true, true, false));

console.log("or", or(true, true, false));

console.log("not", not(true), not(false));
