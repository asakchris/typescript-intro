// Object literals
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 45];
const tea: Drink = ['brown', false, 0];

// There are no label for the value, so no way to understand what the value represents
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
