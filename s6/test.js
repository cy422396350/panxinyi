function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hi = function() {
    console.log('Hi I\'m '+this.name+' and I\'' +this.age+' years old now!');
};

Person.prototype.LEGS_NUM = 2;

function Student(name,age,className) {
    Person.call(this,name,age);
    this.className = className;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.learn = function () {
    console.log(this.name+' is learning!');
};

var stu = new Student('cy',26,'xxx');
stu.hi();
console.log(stu.LEGS_NUM);