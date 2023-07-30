/**
 * 
 */

function fizzBuzz(num) {
  let finalArray = [];
  for (let i=0; i < num; i++) {
    if(i === 0){
      finalArray.push(0)
    } else if (i%3 === 0 && i%5 === 0) {
      finalArray.push('FizzBuzz')
    } else if (i%5 === 0) {
      finalArray.push('Buzz')
    } else if (i%3 === 0) {
      finalArray.push('Fizz')
    } else {
      finalArray.push(i)
    }
  };
  return finalArray;
}
console.log(fizzBuzz(100))
