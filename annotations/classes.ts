class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }
}

const car = new Car('orange', 4);
car.drive();
car.honk();
console.log(car.color);
