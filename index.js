/* push and pop are actions for Arrays, they change the Arrays in some way: theArray.nameOftheMethod(argument);

the basic methods = actions that are performed on objects, methods returns a value as well as actions.

/* to push an item into the Array use PUSH method  */


let myArray = ["milk", "bread", "cheese"];

/* if I already created a list for a Array but forgot to add 1 more item, we do this by the PUSH method. */

// here we perform an action on myArray, we add juice to myArray

myArray.push("juice");

// mrArray now contains 'juice' and the length of the Array has increased by one

console.log (myArray);

/* what if I also needed to know the LENGTH of the Array when you add the item to the Array using the PUSH method, I can use the return value from the PUSH method and assign it to a varible, as the PUSH method not only performs an action,it isone of the methods that have a return value as well. */

let something = myArray.push("tea");

console.log(myArray);
console.log("arrayLength", something);