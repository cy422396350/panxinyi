/**
 * Created by MBENBEN on 2018/4/17.
 */
class Animal{
    constructor(){
        this.name = 'Animal';
    }
    getName(){
        return this.name;
    }
}

class Cat extends Animal{
    constructor(){
        super();
        this.name = 'Cat';
    }
}
let animal = new Animal();
let cat = new Cat();

let name = 'dog',age = 3;
let dog = {
    name,age,getName(){
        return this.name;
    }
};
console.log(animal.getName());
console.log(cat.getName());
console.log(dog.getName());

Object.keys(dog);
console.log(Object.assign({food:'meat'},dog));