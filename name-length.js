const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name? `, name => {
  console.log(`Hello "${name}"`);
  console.log(`The length of your name is: ${name.length}`);
  readline.close();
});
