// imports functions as promises, so its possible to use await directly
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result.txt",
      `THIS IS AWESOME:\n${first}\n${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
