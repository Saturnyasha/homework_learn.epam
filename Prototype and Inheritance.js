// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
// Создайте 2 объекта: животное и кошка, добавьте свойство движения к объекту животного, 
//объект кошки должен наследовать свойство движения от объекта животного.

let Animal1 = {
    move() {
        console.log(`${this.name} запрыгнул в коробочку и замурчал`)
    }
};

class Cat {
    constructor(name) {
         this.name = name;
    }
};

Object.setPrototypeOf(Cat.prototype, Animal1);
let kitty = new Cat("Апельсин");
kitty.move();

//OR//

class Animal {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.color = options.color;
    }
move(){
     console.log(`${this.name} запрыгнул в коробочку`)
    }
};

class Cat extends Animal {};
const cat = new Cat ({
    name: 'Апельсин',
    age: 6,
    color: 'Рыжий',
});
console.log(cat);
cat.move();