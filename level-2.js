// LEVEL 1

// question 1

var colour = "blue";

// question 2

var person = {
  gender: "female",
  age: 40
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var numbersArray = [4, 7, 20, 14, 31];

for (var i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// question 7

var clothes = [
  {
    category: "shirt",
    price: 279,
    inStock: true
  },
  {
    category: "dress",
    price: 599,
    inStock: false
  }
];

for (var i = 0; i < clothes.length; i++) {
  console.log(clothes[i].price);
  console.log(clothes[i].inStock);
}

// question 8

function whatIDontLike(thingIDontLike) {
  console.log("I don't like " + thingIDontLike);
}

whatIDontLike("cold coffee");

// question 9

function subtraction(number1, number2) {
  var result = number1 - number2;
  console.log(result);
}

// question 10

var emptyArray = [];

function simpleFunction(theArgumet) {
  emptyArray.push(theArgumet);
  console.log(emptyArray);
}

simpleFunction(78);

// LEVEL 2

// question 1

for (var i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// question 2

function theSentence() {
  console.log("I am a function");
}

var innerFunction = theSentence;

function outerFunction(theArgument) {
  theArgument();
}

outerFunction(innerFunction);
