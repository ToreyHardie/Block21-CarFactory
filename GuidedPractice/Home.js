class Home {
    constructor(rooms, bathrooms, squareFeet) {
      this.rooms = rooms;
      this.bathrooms = bathrooms;
      this.squareFeet = squareFeet;
    }
  
    getInfo() {
      return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
    }
  }
  
  class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize) {
      super(rooms, bathrooms, squareFeet);
      this.yardSize = yardSize;
    }
  
    getInfo() {
      return `${super.getInfo()} It has a ${this.yardSize} square foot yard.`;
    }
  }
  
  class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floor) {
      super(rooms, bathrooms, squareFeet);
      this.floor = floor;
    }
  
    getInfo() {
      return `${super.getInfo()} It is on floor ${this.floor}.`;
    }
  }

  const singleFamilyHome = new SingleFamilyHome(3, 2, 2000, 5000);
console.log(singleFamilyHome.getInfo()); 

const apartment = new Apartment(2, 1, 1000, 3);
console.log(apartment.getInfo());  