const assertEqual = require("../assertEqual");
const tail = require("../tail");

console.log("\n tails: ");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words), ["Lighthouse", "Labs"];
assertEqual(words.length, 3);