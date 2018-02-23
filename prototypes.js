// PSEUDO-CLASSICAL INHERITANCE

// Object Constructor Funciton - since Capital Letter
function Animal(obj) {
  this.Name = obj.Name;
  this.type = obj.type;
}

const myDog = new Animal({
  Name: 'Stevie',
  type: 'Sad Dog'
});

function Person(attr) {
  this.gender = attr.gender;
  this.name = attr.name;
}
// child will inherit from person parent
function Child(childAttrs) {
  Person.call(this, childAttrs); // concern yourself with both your childAttrs + what you inherited from 'this' Person
  this.isChild = childAttrs.isChild;
}
//but Child will not inherit the speak() function through this method.

Child.prototype = Object.create(Person.prototype); // but child must also explicitly inherit from the Person.prototype. this is a pitfall of current JS pseudo-classical inheritance,
// and so is the reason 'class' was introduced in ES6

Child.prototype.checkIfChild = function() {
  return `${this.name} is child? ${this.isChild}`;
};

// the prototype is the object from which all other objects inherit their attributes
Person.prototype.speak = function() {
  return `Hi my name is ${this.name}..`;
};

const fred = new Person({ gender: true, name: 'fred' });
console.log(fred.speak());

const pebbles = new Child({
  gender: 'female',
  name: 'Pebbles',
  isChild: true
});
console.log(pebbles.checkIfChild());

/* ******************************************** */

function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
  console.log(`shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCalories = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 0.45}`);
};

function Banana(bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkiesLikeIt = bananaAttrs.doMonkiesLikeIt;
}

Banana.prototype.CheckIfMonkiesLikeIt = function() {
  if (this.doMonkiesLikeIt) {
    return `Yea ${this.name} loves em !`;
  } else {
    return `Nope, not no more.`;
  }
};
// banana won't inherit the calculateCalories method
// from the Fruit Parent UNTIL this following line ...
Banana.prototype = Object.create(Fruit.prototype);

const newBanana = new Banana({
  doMonkiesLikeIt: true,
  type: 'Tree',
  name: 'Ana Banannaaaa',
  isRipe: true,
  calories: 0.9
});

// console.log(newBanana.CheckIfMonkiesLikeIt());
console.log(newBanana.calculateCalories());

/* *********************
Kiwi and Banana are two instances of the Fruit Constructor Class
they Call on the Fruit to inherit its attributes
They must also explicitly clone the Fruit prototype in order to have it.
*********************** */

function Kiwi(kiwiAttr) {
  Fruit.call(this, kiwiAttr); // allows inheritance of all attributes from the Fruit Constructor BUT NOT THE Fruit prototype
  this.isFuzzy = kiwiAttr.isFuzzy;
}

Kiwi.prototype = Object.create(Fruit.prototype);

const newKiwi = new Kiwi({
  isFuzzy: true,
  type: 'Treee',
  name: 'Kiwi',
  isRipe: true,
  calories: 0.3
});

console.log(newKiwi.calculateCalories());
console.log(newKiwi.shipped('Miami'));

/* ******************* CLASS ************************* */

class Person {
  constructor(attr) {
    this.gender = attr.gender;
    this.age = attr.age;
  }
  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

class Child extends Person {
  constructor(childAttrs) {
    // the super function takes child attrs and passes them back to person when it's created.
    // Any time a Class is extended, super() must be called in order to pass new attributes to the parent.
    super(childAttrs);
    this.isChild = childAttrs.isChild;
  }
  checkIfChild() {
    return `${this.name} is child? ${this.isChild}`;
  }
}

class GrandChild extends Child {
  constructor(gc) {
    super(gc);
    this.generation = gc.generation;
  }
}
