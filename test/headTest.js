const head = require("../head");
const assertEqual = require("../assertEqual");

console.log("\nhead: ");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);