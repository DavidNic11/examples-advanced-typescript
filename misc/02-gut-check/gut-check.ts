class Cat {
  numberOfLegs = 4;

  makeSound() {
    console.log("meow");
  }

  scratchFurniture() {
    // implementation detail, but the cost is insurmountable
  }
}

class Dog {
  numberOfLegs = 4;

  makeSound() {
    console.log("woof");
  }
}

let animal: Dog = new Dog();

// Will this error?
// animal = new Cat();
