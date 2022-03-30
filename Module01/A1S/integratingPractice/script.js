const arr = [1, 2, 4, 8];

let sum = 0;

for(let number of arr) {

    sum += number;
    
    console.log(sum);

};

for(i = 0; i <= arr.length; i++) {

    let current = arr[i];
    let sum = current + arr[i+1];

    console.log(`${sum} + ${arr[i+1]}`);

};

// let arrSum = arr.reduce(

//     (prev, curr) => prev + curr

// );

// console.log(arrSum);