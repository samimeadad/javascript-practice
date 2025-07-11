const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

(async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    let age;
    while (true) {
      const inputAge = await rl.question('Enter your age (1–120): ');

      // Trim and parse to integer
      age = parseInt(inputAge.trim(), 10);

      if (isNaN(age)) {
        console.log('❌ That is not a number. Please try again.');
      } else if (age < 1 || age > 120) {
        console.log('❌ Age must be between 1 and 120. Try again.');
      } else {
        break; // Valid input, exit loop
      }
    }

    console.log(`✅ Thank you! Your age is ${age}.`);
  } catch (err) {
    console.error('⚠️ Something went wrong:', err.message);
  } finally {
    rl.close();
  }
})();

