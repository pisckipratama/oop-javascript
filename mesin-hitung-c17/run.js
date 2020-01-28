import MesinHitung from "./MesinHitung";

const Pi = 22/7;
var mh = new MesinHitung();
mh.add(10).subtract(5).result(); // Output: 6
mh.add(3).multiply(4).divide(6).result(); // Output: 6
mh.x = 7; 
console.log(`Nilai sekarang : ${mh.x}`); // // Output: Nilai sekarang : 7
mh.multiply(2).multiply(Pi).result(); // Output: 44
mh.x = 7; 
mh.square().multiply(Pi).result(); // Output: 154
mh.x = 4;
mh.exponent(3).result(); // Output 64
mh.squareRoot().result(); // Output 8