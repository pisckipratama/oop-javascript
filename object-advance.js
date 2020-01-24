// object-advance.js

// penulisan (this keyword)
const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greetMaster() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}

// object with function
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};
goat.makeSound();
goat.diet();

// wuth this
const human = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
};

console.log(human.provideInfo());

// arrow function with this
const cat = {
    dietType: 'carnivore',
    makeSound() {
        console.log('Miauww');
    },
    diet: () => {
        console.log(this.dietType);
    }
}

cat.diet(); // undefined

// contoh 2
const myRobot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

myRobot.checkEnergy();

const bankAccount = {
    _amount: 10000
}

bankAccount._amount = 20000;
console.log(bankAccount._amount);

// materi privacy object 
// -> menggunakan underscore di awal nama property untuk menandakan property yang tidak perlu diubah
const robot2 = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot2.recharge();

// Getters
const person = {
    _firstName: 'Fenti',
    _lastName: 'Rahmawati',
    get fullName() {
        if (this._firstName && this._lastName) {
            return `${this._lastName} ${this._firstName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}

console.log(person.fullName);

// contoh 2
const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get level() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`
        }
    }

};
console.log(robot3.level)

// setters
const myPerson = {
    _age: 20,
    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
        } else {
            console.log('You must assign a number to age.');
        }
    }
};

myPerson.age = 21;
console.log(myPerson._age);

// contoh 2
const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

robot4.numOfSensors = 100;
console.log(robot4.numOfSensors);

// factiory function
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
}
const ghost = monsterFactory('Piscki', 20, 'coffee', 'aaaaa');
ghost.scare(); // aaaa

// contoh 2
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};

const tinCan = robotFactory('P-500', true);

// Property value shorthand
const myPassion = (jobs, hobby) => {
    return {
        jobs,
        hobby
    }
};

const myDataPassion = myPassion('backend', 'soccer');
console.log(myDataPassion.hobby);

// destructured assignment
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite',
        morning: {
            early: 'hahaha',
            atEight: 'huhuhu'
        }
    }
};

const {
    residence
} = vampire;
console.log('This is ' + residence);

const {
    early
} = vampire.preferences.morning;
console.log(early);

// contoh 2
const robot5 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot5;
const { beep } = robot5.functionality;
console.log(beep());

// Built-in Object Methods

// -> object.key
const myGirl = {
    name: 'Fenti Rahmawati',
    age: 21,
    degree: 'Psychology',
    isBeauty: true,
    isMarried: false
};

const myGirlKeys = Object.keys(myGirl);
console.log(myGirlKeys);

// -> object entries
const object1 = {
    a: 'somestring',
    b: 42
};

for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

const antrian = Object.entries(object1);
console.log(antrian);

const newRobot = Object.assign(object1, {
    laserBlaster: true,
    voiceRecognition: true
})

console.log(newRobot);