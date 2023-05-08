"use strict";
//normal function
function sum(num1, num2) {
    return num1 + num2;
}
sum(2, 4);
// arrow
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4];
const newArr = arr.map((element) => element * element);
//spread operator
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "phebe"];
myFriends.push(...newFriends);
console.log(myFriends);
