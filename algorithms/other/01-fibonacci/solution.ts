/**
* Fibonacci to generate array with length of num.
  npx ts-node solution.ts
*/

function fibonacciTS(num: number) {
  const array: Array<number> = [];
  let n1: number = 0;
  let n2: number = 1;
  let n3: number;
  for (let i = 0; i < num; i++) {
    array.push(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

  }
  return array
}

console.log(fibonacciTS(7))