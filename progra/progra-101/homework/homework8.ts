function largestHeroName(a: string, b: string, c: string, d: string): string  {

    let heroes: string[] = [a, b, c, d];
    let largestlength = 0;
    let largestHero = '';

    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].length > largestlength) {
            largestlength = heroes[i].length;
            largestHero = heroes[i];
        } 
    }

    return largestHero;
}

console.log ('el héroe con el nombre mas largo es: ', largestHeroName('Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'));    