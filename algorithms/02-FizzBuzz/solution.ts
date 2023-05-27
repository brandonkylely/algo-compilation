/**
 * 
 */

function fizzBuzzTS(num: number) {
  let finalArray: Array<string> = [];
  for (let i=0; i < num; i++) {
    if(i === 0){
      finalArray.push('0')
    } else if (i%3 === 0 && i%5 === 0) {
      finalArray.push('FizzBuzz')
    } else if (i%5 === 0) {
      finalArray.push('Buzz')
    } else if (i%3 === 0) {
      finalArray.push('Fizz')
    } else {
      finalArray.push(i.toString())
    }
  };
  return finalArray;
}
console.log(fizzBuzzTS(100))