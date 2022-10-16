/* Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
 Создайте 2 объекта: животное и кошка, добавьте свойство движения к объекту животного, /объект кошки должен наследовать свойство движения от объекта животного.*/

class Animal {
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
move(){
     console.log(`${this.name} запрыгнул в коробочку`)
    }
};

class Cat extends Animal {
    constructor (name, age, color){
        super (name, age, color)
    }
};

const kotik = new Cat ("Апельсин","6","рыжий");
kotik.move();