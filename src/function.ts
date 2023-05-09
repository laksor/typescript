//normal function

function sum(num1: number, num2: number):number {
   return num1 + num2;
}
sum(2,4);

// arrow
const addArrow = (num1:number, num2:number):number => num1 + num2;

const arr = [1, 2, 3, 4];
const newArr = arr.map((element:number ) => element * element);

//spread operator

const myFriends = ["chandler", "joey", "ross"];  
const newFriends = ["monica", "rachel", "phebe"];
myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter

const greetFriends = (...friends:string[]):void => 
friends.forEach((friend) =>
console.log(`Hi ${friend}`));

greetFriends("kashem", "hashem", "lama", "kama", "malala");