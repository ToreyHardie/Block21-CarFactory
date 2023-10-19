class Vehicle {
    constructor(mode, propulsion, fuel) {
        this.mode = mode;
        this.propulsion = propulsion;
        this.fuel = fuel;
    }

    move(){
        return "This vehicle is moving"
    }

}

const submarine = new Vehicle(
    "underwater",
    "nuclear propulsion",
    "nuclear material"
);

console.log(submarine);

class Car extends Vehicle {
    constructor(mode, propulsion, fuel, make, model, year){
        super(mode, propulsion, fuel)
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const car1  = new Car(
    "ground",
    "combustion engine",
    "gasoline",
    "ford",
    "taurus",
    "2010"
)
