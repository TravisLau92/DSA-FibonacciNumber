// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findFibonacciNumber(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

const n = 7;
console.log(`The ${n}th Fibonacci number is: ${findFibonacciNumber(n)}`);