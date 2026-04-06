let numbers = [1,6,8,4,2,7,10,3,5];

for (let i = 0; i < numbers.length; i++) {
    if ( (numbers[i] % 2) === 0 ) {
        console.log(numbers[i], ' es un número par');
    } else {
        console.log(numbers[i], ' es un número impar');
    }

}