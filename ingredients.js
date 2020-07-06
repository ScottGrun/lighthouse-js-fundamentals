const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

console.log(" ---- While Loop ----");
// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter += 1;
}

// Write a for loop that prints out the contents of ingredients:
console.log(" ---- For Loop ----");

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
  ß;
}

console.log(" ---- Any Loop ----");

for (let i = ingredients.length; i > 0; i--) {
  console.log(ingredients[i - 1]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
