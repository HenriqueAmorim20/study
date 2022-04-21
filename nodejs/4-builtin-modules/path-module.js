const path = require("path");

console.log(path.sep);

// Joins path in a formated way
const filePath = path.join(
  "///4-builtin-modules//",
  "///content/",
  "//subfolder//"
);
console.log(filePath);

// Gets the last element of path
const base = path.basename(filePath);
console.log(base);

// Returns absolute path
const absolute = path.resolve(
  __dirname,
  "nodejs",
  "4-builtin-modules",
  "path-module.js"
);
console.log(absolute);
