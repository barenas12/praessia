let ponds = 150;
let kilograms = 68.0388;

let proportion = ponds / kilograms;

function PondsToKilograms (ponds: number) {
    let kilograms = ponds / proportion;
    console.log (ponds, ' libras son', kilograms, 'kilogramos');
}

function KilogramsToPonds (kilograms: number) {
    let ponds = kilograms * proportion;
    console.log (kilograms, ' kilogramos son', ponds, 'libras');
}

PondsToKilograms(140);
KilogramsToPonds(20);

//de esta manera puedo hacer un conversor para cualquier medida 
//solicitando al usuario la cantidad y la unidad de medida