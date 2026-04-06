function max (a: number, b: number, c :number): number {
    let numbers = [a, b, c];
    let maxNumber = -999999;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        } 
    }
    console.log('el numero mayor es ', maxNumber)
    return maxNumber;
}

max (19, 7777, 100);

// tambien se puede solucionar por medio de un ternario de la siguiente manera:

function maxTernary (a: number, b: number, c :number): number {
    let maxNumber = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    //se lee como "si a es mayor que b, entonces (si a es mayor que c, 
    // entonces a, sino c), sino (si b es mayor que c, entonces b, sino c)"
    console.log('el numero mayor es ', maxNumber)
    return maxNumber;
}
maxTernary (8888, 444, 333);