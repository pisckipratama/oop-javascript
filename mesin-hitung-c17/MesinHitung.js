class MesinHitung {
    constructor() {
        this.x = 1;
    }

    add(number) {
        this.x += number;
        return this;
    }

    subtract(number) {
        this.x -= number;
        return this;
    }

    divide(number) {
        this.x /= number;
        return this;
    }

    multiply(number) {
        this.x *= number;
        return this;
    }

    exponent(number) {
        this.x **= number;
        return this;
    }

    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }

    square() {
        this.x = (this.x ** 2);
        return this;
    }

    result() {
        console.log(this.x);
    }
}

export default MesinHitung;