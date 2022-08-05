function isLeapYear(year) {
  const remainder1 = year % 400;
  if (remainder1 === 0) {
    return true;
  }

  const remainder2 = year % 100;
  if (remainder2 === 0) {
    return false;
  }

  const remainder3 = year % 4;
  if (remainder1 === 0) {
    return true;
  } else {
    return false;
  }
}

const myYear = isLeapYear(1990);
console.log(myYear);
const hisYear = isLeapYear(2000);
console.log(hisYear);
