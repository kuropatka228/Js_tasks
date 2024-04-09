const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound: function() {
    return "Гав-Гав";
  }
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound: function() {
    return "Чик-чирик";
  }
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  this.isDomestic = isDomestic;
  return this;
}

const domesticDog = makeDomestic.bind(dog, true)();
console.log(domesticDog);

const domesticBird = makeDomestic.call(bird, true);
console.log(domesticBird);

const isDomestic = true;
const domesticBirdApply = makeDomestic.apply(bird, [isDomestic]);
console.log(domesticBirdApply);