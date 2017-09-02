function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function cuteStatment() {
  return `${this.owner} loves ${this.name}`;
};

const breakfast = new Cat("breakfast", "Bob");
const markov = new Cat("markov", 'Nancy');

breakfast.cuteStatement = function cuteStatment() {
  return `Everybody loves ${this.name}`;
};

Cat.prototype.meow = function meow() {
  console.log(`${this.name} meows!`);
};

breakfast.meow();
markov.meow();
