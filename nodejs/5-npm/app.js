// npm - global command, comes with node
// npm --version

// local dependency - only use that dependency in that particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// dev dependency - used only for development
// npm install <packageName> -D (or --save-dev)

// package.json - manifest file (store important info about project/dependencies)
// manuel approach (create package.json in the root, create properties etc)
// npm init (step by step)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const flatItems = _.flattenDeep(items);
console.log(flatItems);
console.log('Hello world');
