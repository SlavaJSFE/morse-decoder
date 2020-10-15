const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
    
    let resultExpr = arr.map(function(decode) {
        const chars = decode.length / 10;
        let decodeExpr = '';
         for (i = 0; i < chars; i++) {
             let word = '';
             for (let j = i * 10; j < i * 10 + 10; j += 2) {
                 if (decode[j] + decode[j + 1] === '10') {
                     word += '.';
                 } else if (decode[j] + decode[j + 1] === '11') {
                     word += '-';
                 }
             }
             decodeExpr += MORSE_TABLE[word];
         }
         return decodeExpr;
    });

    return resultExpr.join(' ');
}

module.exports = {
   decode
}