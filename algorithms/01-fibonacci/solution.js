/**
* Fibonacci to generate array with length of num.
*/

function fibonacci(num) {
  const array = [];
  let n1 = 0;
  let n2 = 1;
  let n3;
  for (i = 0; i < num; i++) {
    array.push(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

  }
  return array
}

console.log(fibonacci(7))

/**
* Fibonacci to generate array with the highest number being less than or equal to num.
*/