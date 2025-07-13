const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function showMenu() {
  console.log('\n=== Main Menu ===');
  console.log('1. Say Hello');
  console.log('2. Calculate Sum');
  console.log('3. Exit');
}

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    let running = true;

    while (running) {
      await showMenu();
      const choice = await rl.question('Choose an option (1-3): ');

      switch (choice.trim()) {
        case '1':
          const name = await rl.question('What is your name? ');
          console.log(`👋 Hello, ${name}!`);
          break;

        case '2':
          const a = await rl.question('Enter first number: ');
          const b = await rl.question('Enter second number: ');
          const sum = parseFloat(a) + parseFloat(b);
          if (isNaN(sum)) {
            console.log('❌ Invalid numbers entered.');
          } else {
            console.log(`✅ Sum is: ${sum}`);
          }
          break;

        case '3':
          console.log('👋 Goodbye!');
          running = false;
          break;

        default:
          console.log('❌ Invalid choice. Please choose 1, 2, or 3.');
      }
    }
  } catch (err) {
    console.error('⚠️ Error:', err.message);
  } finally {
    rl.close();
  }
}

main();
