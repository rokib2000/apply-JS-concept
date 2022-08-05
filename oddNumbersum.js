function sumAllNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    sum = sum + element;
  }
  //   console.log(sum);
  return sum;
}

function allOddNumbers(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
  //   console.log(oddNumbers);
}

const numbers = [13, 56, 46, 55, 54, 22, 45, 67, 68, 88, 100];

const oddNumbers = allOddNumbers(numbers);
console.log(oddNumbers);

const sum = sumAllNumbers(oddNumbers);
console.log(sum);
