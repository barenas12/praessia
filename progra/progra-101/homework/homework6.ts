let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i], numbers[i]*2, numbers[i]*3, numbers[i]*4, numbers[i]*5);
}

// esta es una manera muy rudimentaria de hacerlo
//debido a la cantidad de elementos que se enviaron a imprimir
//A continuación habrá una manera más eficiente de hacerlo

let otherNumbers = [1, 2, 3, 4, 5];

for (let i = 1; i < 6; i++) {
    let line = ' ';
    for (let j = 1 ; j < 6; j++) {
        line = line + (i * j) + ' ';
    }
    console.log(line);
}