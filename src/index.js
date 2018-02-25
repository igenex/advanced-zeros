module.exports =
function getZerosCount(number, base) {
  // your implementation
  function findDivisor(num) {
    "use strict";
    let i = 1;

    function getNum(num) {
      while ((num % i)) {
        i++;
      }
      num /= i;
      if (!(num % i)) {
        if(i === 1) i++;
        getNum(num);
      } else {
        if (num !== 1) {
          i++;
          getNum(num);
        }
      }
      return i;
    }

    getNum(num);

    return i;
  }

  let divisor = findDivisor(base);

  function findFactorialZeros(number, div) {
    "use strict";
    let result = 0;
    while (Math.floor(number) > 0) {
      number /= div;
      result += Math.floor(number);
    }
    return result;
  }

  return findFactorialZeros(number, divisor);
};


