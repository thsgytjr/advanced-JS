
/*
var john = {
    name: john,
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.calculateAge = function(){
        console.log(2017 - this.yearOfBirth);
    } 

Person.prototype.lastName = 'Smith';

var john = new Person('John',1990,'Teacher');
var jane = new Person('Jane',1969,'Designer');
var mark = new Person('Mark',1948,'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create
/*
var personProto = {
    calcuteAge: function(){
        consol.log(2017-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto,{
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'Designer'}
});
*/

//Primitives vs objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Object
var obj1 = {
    name: 'john',
    age: 26
};
var obj2 = obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change (a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

consol.log(age);
consol.log(obj.city);