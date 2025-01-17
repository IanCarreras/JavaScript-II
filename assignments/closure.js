// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const addNumbers = (a, b) => {
  let sum;
  return function() {
    sum = a+b;
    return sum;
  }
}
const add = addNumbers(2, 3)
console.log(add())

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  }
};
const newCounter = counter()
console.log(newCounter())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let counter = {
    'increment': function() {
      count = count + 1;
      return count;
    },
    'decrement': function() {
      count = count - 1;
      return count;
    }
  }
  return counter;
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment())
console.log(newCounterFactory.decrement())