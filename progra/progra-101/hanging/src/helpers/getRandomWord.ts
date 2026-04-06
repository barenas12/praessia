let randomWords: string[] = [
    'COMPUTADOR',
    'MESA',
    'HOMOSAPIENS',
    'RUMANIA',
    'HIPOPOTAMO',
    'SATURNO',
];

export function getRandomWord() {

    const randomIndex = (Math.floor(Math.random() * randomWords.length));

    return randomWords[randomIndex];
}