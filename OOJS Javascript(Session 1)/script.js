// q1
function person() {
    this.gender = 'Male';
    this.age = 22;
}

function employee() {
    this.company = 'TO THE NEW';
}

function developer() {
    this.dept = 'FEEN';
}

employee.prototype = new person();
developer.prototype = new employee();

var deve = new developer();
document.getElementById("box1").innerHTML = "Gender: " + deve.gender + ", " + "Age: " + deve.age;
document.getElementById("box2").innerHTML = "Company: " + deve.company;
document.getElementById("box3").innerHTML = "Department: " + deve.dept;

// q2
var arr_div = document.getElementById("arr");

const inputArray = [1,2,3,4,5];

for (var i = 0; i < inputArray.length; i++) {
    (function(i) {
        setTimeout(function() {
            arr_div.innerHTML += inputArray[i] + " ";
        }, 3000*i);
    })(i);
}

// q3
var friend1 = {
    firstname: "Akash",
    lastname: "Gupta"
}

var friend2 = {
    firstname: "Sumit",
    lastname: "Singh"
}

function inviteCall(greeting1, greeting2) {
    document.getElementById("call").innerHTML = 'Invite sent using call. ' + greeting1 + ' ' + this.firstname + ' ' + this.lastname + ', ' + greeting2;
}

function inviteBind(greeting1, greeting2) {
    document.getElementById("bind").innerHTML = 'Invite sent using bind. ' + greeting1 + ' ' + this.firstname + ' ' + this.lastname + ', ' + greeting2;
}

inviteCall.call(friend1, "Hey", "What's up?");

var invitefriend2 = inviteBind.bind(friend2);

invitefriend2("Hello", "How are you?");

// q4
function myConcat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

document.getElementById("arg-obj").innerHTML = myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

// q5
var invocation_count = 0;
var instance_count = 0;

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    instance_count += 1;
}

Person.prototype.getDetails = function() {
    invocation_count += 1;
    return this.firstname + " " + this.lastname;
}

var person1 = new Person("Charu", "Goyal");
var person2 = new Person("Rahul", "Singh");
var person3 = new Person("Kunal", "Raghav");

person1.getDetails();
person2.getDetails();
person3.getDetails();

document.getElementById("box4").innerHTML = "Number of function Invocation: " + invocation_count + "<br>";
document.getElementById("box4").innerText += "Number of  Instances: " + instance_count;

// q6
function makeFunc() {
    var count =0;
    function countUp() {
        count++;
        return count;
    }
    return countUp;
};

var myFunc = makeFunc();

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("counter").innerHTML = myFunc();
});

// q7
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits.toString();

document.getElementById("demo2").innerHTML = fruits.shift();

fruits.slice(1,3)
document.getElementById("demo3").innerHTML = fruits;

var Girls = ["Cecilie", "Lone"];
var Boys = ["Emil", "Tobias", "Linus"];
var Children = Girls.concat(Boys);

document.getElementById("demo4").innerHTML = Children;

Children.sort()
document.getElementById("demo5").innerHTML = Children;