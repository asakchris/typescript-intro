const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inferenece when extracting values
const car0 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
