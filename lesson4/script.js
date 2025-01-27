const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below

function CountBetween(StockClosingPrices) {
let result = 0;
for (let num of StockClosingPrices) {
    if ((num > 254) && (num < 257)) {
        result +=1;
    }
}
console.log(result)
}

CountBetween(MSFTStockClosingPrices)
CountBetween(AAPLStockClosingPrices)