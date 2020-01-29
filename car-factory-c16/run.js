// challange 16 Rubicamp: OOP

class CarFactory {
    constructor() {
        this.numOfCars = [Math.floor(Math.random() * 4)];
    }

    startBuild() {
        let resultCar = [];
        let startBuildHonda = new Honda (4,4);
        for (let i = 0; i < this.numOfCars; i++) {
            resultCar.push(startBuildHonda.buildHonda());
        }
        console.log(this.numOfCars);
        console.log(resultCar);
    }
}

class Car {
    constructor(door, seat) {
        this.tyre = new Tyre();
        this.production = 2020;
        this.door = door;
        this.seat = seat;
    }

    warrantyCalculation() {
        let year = new Date();
        return (year.getFullYear() + Math.floor(Math.random() * 3) + 3)
    }
}

class Tyre {
    constructor() {
        const tyreBrand = ['Dunlop', 'Achiles', 'Yokohama'];
        this.tyreBrand = tyreBrand[Math.floor(Math.random() * 3)];
    }
}

class Honda extends Car {
    constructor() {
        super(4,4)
        let variant = ['Jazz', 'Brio', 'Mobilio', 'CRV', 'BRV'];
        this.variant = variant[Math.floor(Math.random() * 5)];
    }
    buildHonda() {
        let objectBuild = {
            carBrand: 'Honda',
            variant: `${this.variant}`,
            numberOfDoor: `${this.door}`,
            numberOfSeat: `${this.seat}`,
            tyre: `${this.tyre.tyreBrand}`,
            warranty: `${this.warrantyCalculation() - this.production >= 0 ? `Active until ${this.warrantyCalculation()}` : "Expired"}`
        }

        return objectBuild;
    }
}

let honda = new CarFactory();
honda.startBuild();