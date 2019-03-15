var quiz = {};

// ---------------------------------------------------------------------
// 1.001 QUIZ 2018
//
// All quiz questions are in this file. If you would like to run
// your code there is a separate file, run.js(), which you can use
// and manipulate to your liking. The quiz is open book and open web.
// Feel free to google for answers as you would in the real world.
// Good luck!
// ---------------------------------------------------------------------

// ----------------------------------------
//   SECTION 01 - BASICS
// ----------------------------------------

quiz.question_00 = function() {
  // ----------------------------------------
  //   QUESTION 00
  //   Is "counter" a global variable?
  //   Return true or false.
  // ----------------------------------------
  var counter = 0;
  return false;
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Hi!';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  return [{index:0},
    {index:1},
    {index:2},
    {index:3},
    {index:4}];
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  return [
    {
      name:"Nancy B. Baker",
      age: 30
    },{
      name:"Phyllis B. Hedges",
      age: 73
    },{
      name:"Melanie L. Watson",
      age: 52
    },{
      name:"Kevin R. Kelley",
      age: 38
    },{
      name:"Harry B. Levan",
      age: 49
    },];
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  return {
    foo: function (){
      return "foo";
    },
    bar: function (){
      return "bar";
    },
    buzz: function (){
      return "buzz";
    }
  };
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------

  someObject.age = 38;  // set property `age` to 38
  return someObject;
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function(data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------

  var carPrice = 0;

  var car = data.cars[carName][0].color[0].price;
  carPrice = car;

  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {price:0,};

  Object.keys(data.cars).forEach(cars =>{
    let carName = cars;
    cars = data.cars[cars];
    cars.forEach(car =>{
      // Check if Price is on Element
      if (!('price' in car) || (typeof car.price == 'undefined')){
        if (!('color' in car) || (typeof car.color == 'undefined')){
          throw new Error(`Neither 'color' nor 'price' keys are set, unable to ensure maximum price properly. Please verify data format.`);
        }else{
          car.color.forEach(color =>{
            if (color.price > maxPricedCar.price){
              maxPricedCar = {
                make: car.make,
                model: car.model,
                doors: car.doors,
                price: car.price
              };
            }
          });
        }
      }else{
        // Price is on Root Element
        if (car.price > maxPricedCar.price){
          maxPricedCar = {
            make: carName,
            model: car.model,
            doors: car.doors,
            price: car.price
          };
        }
      }
    })
  });

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  data.cars['Honda'] = [{model:'Civic', doors:4, price:18840},];

  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

quiz.question_09 = function(input) {
  // ---------------------------------------------------------------
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  // ---------------------------------------------------------------

  var obj = {};
  input.forEach(function(skier) {
    obj[skier.name] = skier.time;
  });
  return obj;
};

quiz.question_10 = function(input) {
  // ---------------------------------------------------------------
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  //
  // Example input: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // Example output: ['Bob']
  // ---------------------------------------------------------------

  var res = input
    .filter(function(skier) {
      return (skier.time < 48.5);
    })
    .map(function(skier) {
      return skier.name;
    });
  return res;
};

quiz.question_11 = function(input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  // A Faster Implementation if usage of reduce is not required.
  // return input.join(', ');

  var res = input.reduce(
    function(acc, curr) {
      acc += curr + ', ';
      return acc;
    },
    '');

  res = res.substring(0, res.length - 2);
  return res;
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function(a,b) {
    return a.time - b.time;
  };
  return input.sort(compare);
};

module.exports = quiz;