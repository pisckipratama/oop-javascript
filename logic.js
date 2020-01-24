function Kucing() {
    this.kenyang = false;
    this.makan = function() {
        console.log('Kucing makan...');
        this.kenyang = true;
    }
}

var simba = new Kucing();
console.log(simba.kenyang);

simba.makan();
console.log(simba.kenyang);

console.log(Kucing.prototype);