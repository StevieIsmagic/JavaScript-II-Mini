// to test these problems you can run 'node constructors.js' in your terminal

// problem #1
// add a method to Animal's prototype called 'grow'
// when 'grow' is invoked log '<name> grew larger!'

function Animal(options) {
  this.name = options.name;
}

Animal.prototype.grow = function() {
  return `${this.name} grew larger!`;
};

const bear = new Animal({ name: 'Stevie Bear' });
console.log('1. Animal.grow()', bear.grow());

// class Animal
//   constructor(object) {
//     this.type = object.type;
//     this.name = object.name;
//     this.sound = object.sound;
//   }
//   speak() {
//     return this.sound;
//   }
// }

// old constructor function
// function Animal(object) {
//   this.type = object.type;
//   this.name = object.name;
//   this.sound = object.sound;
//   this.speak = function() {
//     return this.sound;
//   };
// }

// const doggo = new Animal({ type: 'dog', name: 'stevie', sound: 'woof!' });
// console.log(doggo.speak());

// const liger = new Animal({
//   type: 'Lyger',
//   name: 'Leeroy',
//   sound: 'ROWADF'
// });
// console.log(liger.speak());

// function Animal(options) {
//   this.name = options.name;
// }

// // add 'grow' to Animal's prototype here
// Animal.prototype.grow = function() {
//   return `${this.name} grew larger!`;
// };

// const monkey = new Animal('Stevie');
// monkey.grow();
// console.log(monkey);

// problem #2
// setup Cat to inherit from Animal
// the Animal constructor needs to be invoked with the 'options' argument
// Cat should have its prototype inherit from Animal
// instances of Cat should also have access to the 'grow' method

function Cat(options) {
  // invoke Animal here with .call
  Animal.call(this, options);
}
// inherit from Animal.prototype
Cat.prototype = Object.create(Animal.prototype);
const tabby = new Cat({ name: 'Tabitha' });

console.log('2. Cat inherits from Animal:', tabby.grow());

// connect the prototypes here

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie'
});

console.log(foofie.grow());
