//soal 2 jika jarak a dan b berjarak 3 karakter akan menghasilkan nilai true
function threeStepsAB(text) {
    for(let i=0; i<text.length; i++){
        if (text[i] === 'a' && text[i+4] === 'b'){
            return true;
        }
        if (text[i] === 'b' && text[i+4] === 'a'){
            return true;
        }
    }
    return false;
}

console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meet'));