// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
  constructor(obj) {
    this.name = obj.name;
  }
  grow() {
    return `${this.name} grew in his sleep!`;
  }
}

const panda = new Animal({ name: 'George' });
console.log('Panda :', panda);
console.log(panda.grow());

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class

class Cat extends Animal {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
}

const pinkCat = new Cat({ name: 'delilah' });
console.log('Pink Cat grow: ', pinkCat.grow());

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie'
});

console.log(foofie.grow());
