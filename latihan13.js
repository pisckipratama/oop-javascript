function hitungProfit(shoppers) {
    let listBarang = [
        ['Sepatu Sanji', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweeter Hinata', 1750000, 1]
    ];

    let input = shoppers;

    let data = [{
        product: listBarang[0][0],
        shoppers: [],
        leftOver: listBarang[0][2],
        totalProfit: 0
    }, {
        product: listBarang[1][0],
        shoppers: [],
        leftOver: listBarang[1][2],
        totalProfit: 0
    }, {
        product: listBarang[2][0],
        shoppers: [],
        leftOver: listBarang[2][2],
        totalProfit: 0
    }];

    if (shoppers.length === 0) {
        return shoppers;
    } else {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (data[i].product === input[j].product) {
                    if (data[i].leftOver >= input[j].amount) {
                        data[i].shoppers.push(input[j].name);
                        data[i].leftOver -= input[j].amount;
                        data[i].totalProfit += listBarang[i][1] * input[j].amount;
                    }
                }
            }

        }
        return data;
    }

}
console.log('*** Hasil 1 ***');
console.log(hitungProfit([{
    name: 'Anis Fikriyyah',
    product: 'Sepatu Sanji',
    amount: 2
}, {
    name: 'Asrul Harahap',
    product: 'Sepatu Sanji',
    amount: 3
}, {
    name: 'Ghazala Tisha',
    product: 'Sweeter Hinata',
    amount: 2
}]));
//[ { product: 'Sepatu Sanji',
//   shoppers: [ 'Anis Fikriyyah', 'Asrul Harahap' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweeter Hinata',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log('\n*** Hasil 2 ***');
console.log(hitungProfit([{
    name: 'Anis Fikriyyah',
    product: 'Sepatu Sanji',
    amount: 8
}, {
    name: 'Asrul Harahap',
    product: 'Sepatu Sanji',
    amount: 10
}, {
    name: 'Ghazala Tisha',
    product: 'Sweeter Hinata',
    amount: 1
}, {
    name: 'Rifki Hilman',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'M. Lan',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Sanji',
//     shoppers: [ 'Anis Fikriyyah' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Rifki Hilman', 'M. Lan' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweeter Hinata',
//     shoppers: [ 'Ghazala Tisha' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log('\n*** Hasil 3 ***')
console.log(hitungProfit([{
    name: 'Anis Fikriyyah',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Sanji',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweeter Hinata',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log('\n*** Hasil 4 ***');
console.log(hitungProfit([]));
//[]

console.log(' ');
const sapa = nama => console.log('Hello ' + nama);
const prosesSapa = callback => {
    let nama = 'Piscki';
    callback(nama);
}

prosesSapa(sapa);