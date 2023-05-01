// // Exercise 1

let user = {
    name: "John",
    years: 30
  }

let {name, years :age, isAdmin =false} = user
console.log(user);






// // Exercise 2

let ourPlanet = earth;
let visitor = human;





// // Exercise 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()

// the result is error because the call of the sayHi function has access only to the user variable which is inside the block but doesn't have access to 
// the phrase variable because it is defined outside of the block 





// // Exercise 4
let user = {};
user.name = 'John';
user.surname ='Smith';

user.name = 'Pete'

console.log(user.name, user.surname);

delete user.name;
console.log(user.surname);





// Exercise 5
const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete"
  console.log(user.name);

//Yes it is possible since we will change a property of the const variable but not reassign it



// Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
let sum = 0

for (let i in salaries){
 sum+= salaries[i];
}
if  (sum === 0){
    console.log('')

}else{
    console.log(sum)
}



// Exercise 7
if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }

let result = (a + b  < 4) ? 'Below' : 'Over';



// Exercise 8
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}




let login = 'Employee';

let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';

console.log(message);


