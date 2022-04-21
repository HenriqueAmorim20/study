// Sync file operations

// const fs = require("fs");
// fs.readFileSync();
const { readFileSync, writeFileSync } = require("fs");

console.log('starting sync operation');
const first = readFileSync("./4-builtin-modules/content/first.txt", "utf8");
const second = readFileSync("./4-builtin-modules/content/second.txt", "utf8");

writeFileSync(
  "./4-builtin-modules/content/result-sync.txt", // Existing file or new file to be written
  `Here is the result: ${first}, ${second}` // second argument is the value to be written
  // { flag: "a" }  third argument is the mode of writing, in this case 'a' appends
);
console.log('sync operation done');
// -------------------------------

// Async file operations
const { readFile, writeFile } = require("fs");

console.log('starting async operation');
readFile("./4-builtin-modules/content/first.txt", "utf8", (err, result) => {
  if (err) return console.log(err);

  const first = result;

  readFile("./4-builtin-modules/content/second.txt", "utf8", (err, result) => {
    if (err) return console.log(err);

    const second = result;

    writeFile(
      "./4-builtin-modules/content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) return console.log(err);
        console.log('async operation done');
      }
    );
  });
});
console.log('code keeps running');
// -------------------------------
