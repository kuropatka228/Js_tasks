const userString = prompt("Введите текст для обрезки");
const trimmedString = userString.trim();

const startSliceIndex = parseInt(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = parseInt(prompt("Введите индекс, которым нужно закончить обрезку строки"));

const a = Number(startSliceIndex);
const b = Number(endSliceIndex);

const result = trimmedString.slice(a, b);
alert(result);