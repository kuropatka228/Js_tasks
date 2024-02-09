
console.log(console.log);
console.log({ name: "Maxim" });
console.log(Symbol(33));
console.log(Number);
console.log("");
console.log(0);
console.log(-10);
console.log("-105");

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(
  Number({ name: "Maxim" }),
  Boolean({ name: "Maxim" }),
  String({ name: "Maxim" })
);

console.log(Boolean(Symbol(33)), String(Symbol(33)));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(""), Boolean(""), String(""));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number("-105"), Boolean("-105"), String("-105"));
