// Exercise 1
const MSFTStockClosingPrices_Exercise1 = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below
let result_Exercise1 = 0
for (let i = 0; i < MSFTStockClosingPrices_Exercise1.length; i++) {
    result_Exercise1 += MSFTStockClosingPrices_Exercise1[i];
}
console.log("The total sum of closing prices of MSFT is " + result_Exercise1);

// Exercise 2

const MSFTStockClosingPrices_Exercise2 = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below
    let result_Exercise2 = 0;
    for (let i = 0; i < MSFTStockClosingPrices_Exercise2.length; i++) {
        result_Exercise2 += MSFTStockClosingPrices_Exercise2[i]["Monday"];
        result_Exercise2 += MSFTStockClosingPrices_Exercise2[i]["Tuesday"];
        result_Exercise2 += MSFTStockClosingPrices_Exercise2[i]["Wednesday"];
        result_Exercise2 += MSFTStockClosingPrices_Exercise2[i]["Thursday"];
        result_Exercise2 += MSFTStockClosingPrices_Exercise2[i]["Friday"];
    }
    console.log("The total sum of closing prices of MSFT is " + result_Exercise2.toFixed(2))

    // Exercise 3

    const MSFTStockClosingPrices_Exercise3 = [
        {
            Monday: 254.12,
            Tuesday: 253.12,
            Wednesday: 256.97,
            Thursday: 257.52,
            Friday: 258.93
        },
        {
            Monday: 292.20,
            Tuesday: 289.73,
            Wednesday: 291.04,
            Thursday: 294.55,
            Friday: 296.29
        }]
        
        // Write your code below
        