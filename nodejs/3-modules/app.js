// CommonJS, every gile is a module (by default)
// Modules - Encapsulated Code (only sharing what we want)

// Importing a module
const names = require("./names"); // const { john, peter } = require("./4-names"); => destructure
const sayHi = require("./utils");
const data = require("./alternative-export");

// Everytime a module is required, its code runs, because its exported as a function
require("./modules-always-executes");

console.log(data);

sayHi("Henrique");
sayHi(names.john);
sayHi(names.peter);
