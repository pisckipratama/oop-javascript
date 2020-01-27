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
        this.expire = false;
    }
}

class Mobilio extends Car {
    constructor(year, machineNum) {
        super("Bridgestone", "17inch", 5, 7, year, machineNum);
        this.varian = "Mobilio";
        this.warranty = 3;
    }
}

class Jazz extends Car {
    constructor(year, machineNum) {
        super("Dunlop", "15inch", 5, 5, year, machineNum);
        this.varian = "Jazz";
        this.warranty = 1;
    }
}

class carFactory {
    constructor() {
        this.cars = [];
        this.count = 0;
    }

    static getRandom() {
        return Math.floor(Math.random() * (9 - 2)) + 2;
    }

    produce(year) {
        // produksi mobilio
        for (let i = 0; i <= carFactory.getRandom(); i++) {
            this.cars.push(new Mobilio(year, this.count++));
        }

        // produksi jazz
        for (let i = 0; i <= carFactory.getRandom(); i++) {
            this.cars.push(new Jazz(year, this.count++));
        }
    }

    hasilProduksi() {
        console.log(`Hasil Produksi saat ini: `)
        this.cars.forEach(item => {
            console.log(`
no. Mesin \t\t: ${item.machineNum}
varian \t\t\t: ${item.varian}
tahun pembuatan \t: ${item.year}
jumlah pintu \t\t: ${item.door}
jumlah kursi \t\t: ${item.chair}
spesifikasi ban \t: ${item.tyre.brand} (${item.tyre.size})
=====================================================
            `)
        })
    }
}

let honda = new carFactory();
honda.produce(2017);
honda.produce(2020);
honda.hasilProduksi();