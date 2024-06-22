// Given an integer array nums[], write a program to find three numbers 
// from the array whose product is maximum and output the result.

const valoresTest = [1,23, 55, -11, -66];

function calcularMaximoValor(payload) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    payload.forEach(num => {
        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if(num >= max2) {
            max3 = max2;
            max2 = num;
        } else if(num >= max3) {
            max3 = num;
        }

        if (min1 >= num) {
            min2 = min1;
            min1 = num;
        } else if(min2 >= num) {
            min2 = num;
        }
    })

    const product1 = max1 * max2 * max3;
    const product2 = max1 * min1 * min2;

    return Math.max(product1, product2);
}

const resultado = calcularMaximoValor(valoresTest);

console.log(resultado)