// словарь обозначения 
const dictionary = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
}

// перевод в десятичную систему счисления
const toDecimal = (number, numberSystem) => {
 let decimal = 0;
 let symbol = 0;
 let rezultString = '';

  for (let i = 0; i < number.length; i++) {
    symbol = +number[i];
    if (number[i] in dictionary) {
      symbol = dictionary[number[i]];
    }
    decimal += symbol * Math.pow(numberSystem, number.length - 1 - i);  
    // rezultString += `(${symbol} x ${numberSystem}^${number.length - 1 - i})${
    //                   (i === number.length - 1)?'':' + '}`;
  }  
 //return `${number} = ${rezultString} = ${decimal}`;
 return decimal;
}

// перевод из десятичной системы счисления
function fromDecimal(decimalNumber, numberSystem) {
  let result = '';
  let currentNumber = decimalNumber;
  while (currentNumber !== 0) {
    const key = Object.keys(dictionary).find(key=> dictionary[key] === currentNumber % numberSystem);
    result = `${(key)? key : currentNumber % numberSystem}` + result; 
    currentNumber = Math.floor(currentNumber / numberSystem);
  } 
  return result;
}
 
// выбор функции для конвертации
function changeNumbers(number, originalBasis, targetBasis) {
  let result;
  
  switch (true) {
    case (originalBasis === 10):
      result = fromDecimal(number, targetBasis);
      break;
    case targetBasis === 10:  
      result = toDecimal(number, originalBasis);
      break;
    default:
      result = fromDecimal(toDecimal(number, originalBasis), targetBasis);
      break;
  } 
  return result;
}
