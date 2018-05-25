/**
 * Created by MBENBEN on 2018/5/16.
 */
function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hi = function () {
  console.log('Hi, my name is '+ this.name)
}

Person.prototype.LEGS_NUM = 2

function Student(name,age,className) {
  Person.call(this,name,age)
  this.className = className
}
if(!Object.create){
  Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F;
  }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.hi = function () {
  console.log('Hi i\'m a student name is '+this.name);
}

Student.prototype.learn = function () {
  console.log('learn')
};

var bobi = new Student('Boson',25,'class1');
bobi.hi();
console.log(bobi.name)
console.log(bobi.LEGS_NUM)