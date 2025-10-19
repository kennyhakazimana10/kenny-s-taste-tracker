// Taste Tracker Assignment
// by Kenny-All Hakazimana
// Open console (Ctrl + Shift + J) to see results.

console.log("Hello World!"); // test line to check setup

// ===============================
// Problem 1: Create arrays
// ===============================
const myFavoriteFoods = [
  "Greek salad",
  "Grilled salmon with lemon",
  "Caprese salad",
  "Ratatouille",
  "Minestrone soup",
  "Gazpacho",
  "Grilled sardines",
  "Roasted vegetables",
  "Avocado toast",
  "Quinoa bowl"
];

const popularEuropeanFoods = [
  "Pizza", "Paella", "Croissant", "Fish and chips", "Ratatouille",
  "Greek salad", "Pasta", "Risotto", "Baguette", "Caprese salad",
  "Moussaka", "Spanakopita", "Polenta", "Bruschetta", "Tiramisu",
  "Apple strudel", "Currywurst", "Haggis", "Patatas bravas", "Gazpacho"
];

console.log("Problem 1 - Arrays created");
console.log("My favorites:", myFavoriteFoods);
console.log("Popular list count:", popularEuropeanFoods.length);

// ---------------------------
// Problem 2: Log a specific output
// ---------------------------
console.log("Problem 2 - My top favorite food is:", myFavoriteFoods[0]);

// ---------------------------
// Problem 3: Loop through values
// ---------------------------
console.log("Problem 3 - Listing all my favorite foods:");
for (let food of myFavoriteFoods) {
  console.log("I really like " + food);
}

// ---------------------------
// Problem 4: Write and call a function
// ---------------------------
function describeFood(food) {
  return food + " is one of my go-to healthy European meals.";
}

console.log("Problem 4 -", describeFood("Ratatouille"));

// ---------------------------
// Problem 5: Use conditionals to find shared foods
// ---------------------------
let sharedFoods = [];

for (let item of popularEuropeanFoods) {
  if (myFavoriteFoods.includes(item)) {
    sharedFoods.push(item);
  }
}

if (sharedFoods.length > 0) {
  console.log("Problem 5 - Shared foods found:", sharedFoods);
} else {
  console.log("Problem 5 - No shared foods found.");
}

// ---------------------------
// Problem 6: Compare array lengths
// ---------------------------
if (myFavoriteFoods.length > popularEuropeanFoods.length) {
  console.log("Problem 6 - My list is longer.");
} else if (myFavoriteFoods.length < popularEuropeanFoods.length) {
  console.log("Problem 6 - The popular list is longer.");
} else {
  console.log("Problem 6 - Both lists have the same length.");
}

// ---------------------------
// Problem 7: Add a new food
// ---------------------------
myFavoriteFoods.push("Grilled chicken with herbs");
console.log("Problem 7 - Added new food:", myFavoriteFoods[myFavoriteFoods.length - 1]);
console.log("Updated favorites:", myFavoriteFoods);

// ---------------------------
// Problem 8: Function that returns multi-word foods
// ---------------------------
function multiWordFoods(list) {
  let result = [];
  for (let food of list) {
    if (food.includes(" ")) {
      result.push(food);
    }
  }
  return result;
}

let multiWordList = multiWordFoods(myFavoriteFoods);
console.log("Problem 8 - Foods with more than one word:", multiWordList);

// ---------------------------
// Problem 9: Find a specific value
// ---------------------------
let firstSalad = myFavoriteFoods.find(food => food.includes("salad"));
console.log("Problem 9 - First salad found:", firstSalad);

// ---------------------------
// Problem 10: Summary function
// ---------------------------
function summary() {
  console.log("Problem 10 - Summary");
  console.log("Total favorite foods:", myFavoriteFoods.length);
  console.log("Total popular foods:", popularEuropeanFoods.length);
  console.log("Shared foods:", sharedFoods.length);
}

summary();
