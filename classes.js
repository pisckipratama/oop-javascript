// materi classes

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

// constructor
// class Surgeon {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//     }
// }

// // instance
// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// console.log(surgeonCurry.name); // Output: Curry
// console.log(surgeonCurry.department); // Output: Cardiovascular

// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
// console.log(surgeonDurant.name); // Output: Durant
// console.log(surgeonDurant.department); // Output: Orthopedics

// Methods
class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// method call
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays); // output 17

// inheritance
// => parent class
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }
}

// => child class
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// static methods
class ClubSepakbola {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    static generateName() {
        const names = ['Arema', 'Persib', 'Persija', 'Persebaya', 'Bali United'];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber];
    }

    get name() {
        return this._name;
    }
}

console.log(ClubSepakbola.generateName());
const pelatihClub = new ClubSepakbola('Rene Alberts');
console.log(pelatihClub.generateName());
console.log(HospitalEmployee.generatePassword());