const numberVar = 10;
const stringVar = 'салам алейкум';
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const objectVar = { key: 'value' };
const bigintVar = 90000000000000000n;
const symbolVar = Symbol('description');


console.log(Number(numberVar), String(numberVar), Boolean(numberVar));
console.log(Number(stringVar), String(stringVar), Boolean(stringVar));
console.log(Number(booleanVar), String(booleanVar), Boolean(booleanVar));
console.log(Number(nullVar), String(nullVar), Boolean(nullVar));
console.log(Number(undefinedVar), String(undefinedVar), Boolean(undefinedVar));
console.log(Number(objectVar), String(objectVar), Boolean(objectVar));
console.log(Number(bigintVar), String(bigintVar), Boolean(bigintVar));
console.log(String(numberVar), Boolean(numberVar));