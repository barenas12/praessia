
function heroesThatStartWithS (nameList: string[], letter: string) {

    letter = letter.toUpperCase(); 

let newNameList: string[] = [];

//for (let i = 0; i < nameList.length; i++) {
//    let name = nameList[i];

for (let name of nameList) {
// este modo puede usarse solo en javascript y sirve para recorrer arrays y strings
//de una manera mas sencilla

    if (name.startsWith(letter)) {
        newNameList.push(name);
    }
}

    return newNameList;
}

let heroes: string[] = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesWithLetterS = heroesThatStartWithS(heroes, 'd');
console.log(heroesWithLetterS)