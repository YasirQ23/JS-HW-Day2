//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    console.log(Object.keys(person3)[i], ' : ', Object.values(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.birthday = () => {
        this.age++
    }
    this.printInfo = () => {
        console.log(`You see that guy right there his name is ${this.name} and he is ${this.age} years old.`);
    }
}

let sam = new Person('Sam', 25)
let dylan = new Person('Dylan', 25)

for (let i = 0; i < 3; i++) {
    dylan.birthday()
}

sam.printInfo()
dylan.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let string_ = 'Check me bro see if im 10 see if i care.'

let is10 = str_ => {
    return new Promise((resolve, reject) => {
        if (str_.length >= 10) {
            resolve(console.log('BIG WORD'));
        } else {
            reject(console.log('smol word'));
        }
    })
}

is10(string_)


//Code Wars

// # 1
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
// # 1
function getCount(str) {
    let vowels = 'aeiouAEIOU'
    let vowelsCount = 0;
        {
      if (vowels.includes(str[i])){
        vowelsCount ++
      }
    }
    return vowelsCount;
  }

// # 2
/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
// # 2
function highAndLow(numbers){
    let myArray = numbers.split(" ")
    let nums = []
    for (let i = 0; i < myArray.length; i++){
      nums.push(parseInt(myArray[i]));
    }
    let answer_list = [Math.max.apply(null, nums).toString(),Math.min.apply(null, nums).toString()]
    let answer = answer_list.join(' ')
    return answer
  }