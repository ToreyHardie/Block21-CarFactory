class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This car is a ${this.make}, ${this.model}, and ${this.year}`;
    }
  }
  
  class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }
  
    getDescription() {
      return `This car is a ${this.make}, ${this.model}, and ${this.year} with a range of ${this.range} miles`;
    }
  }
  
  const MyElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
  console.log(MyElectricCar.getDescription());