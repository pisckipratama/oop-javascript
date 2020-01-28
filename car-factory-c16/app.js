class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(brandTyre, sizeTyre, door, chair, year, machineNum) {
        this.tyre = new Tyre(brandTyre, sizeTyre);
        this.door = door;
        this.chair = chair;
        this.year = year;
        this.machineNum = machineNum;
    }
}

class Mobilio extends Car {
    constructor(year, machineNum) {
        super('Achiles', '17inch', 5, 7, year, machineNum);
        this.variant = 'Mibilio';
        this.warranty = 1; // in year
    }
}

class Brio extends Car {
    constructor(year, machineNum) {
        super('Dunlop', '15inch', 5, 5, year, machineNum);
        this.variant = 'Brio';
        this.warranty = 3; // in year
    }
}

class CarFactory {
    constructor() {
        this.car = [];
        this.count = 0;
    }

    static getRandom() {
        return Math.floor(Math.random() * (9 - 2)) + 1;
    }

    produce(year) {
        // produksi mobilio
        for (let i = 0; i <= CarFactory.getRandom(); i++) {
            this.car.push(new Mobilio(year, this.count++));
        }

        // produksi brio
        for (let i = 0; i <= CarFactory.getRandom(); i++) {
            this.car.push(new Brio(year, this.count++));
        }
    }

    // simulasiGaransi(year) {
    //     for (let i = 0; i < this.car.length; i++) {
    //         if(this.car[i].year == )
    //      }
    // }

    hasilProduksi() {
        this.car.forEach(item => {
            console.log(`
No. Mesin \t: ${item.machineNum}
Variant \t: ${item.variant}
Tahun Produksi\t: ${item.year}
J. Pintu \t: ${item.door}
J. Kursi \t: ${item.chair}
Spek Ban \t: ${item.tyre.brand} (${item.tyre.size})
Warranty \t: $
===================================================`);
        })
    }
}

let honda = new CarFactory();

honda.produce(2017);
honda.produce(2020);
honda.hasilProduksi();