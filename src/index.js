module.exports = function toReadable (number) {
    const first = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    
    const second = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    
    let result = '';
    
    if (number <= 19) {
        result = first[number];
    } else if (number > 19) {
        number = number.toString().split('');
        if(number.length == 2) {
            if(number[1] == '0') {
                result = second[number[0]];
            } else {
                result = `${second[number[0]]} ` + `${first[number[1]]}`;
            }
        } else if (number.length == 3) {
            if(number[2] == '0' && number[1] == '0') {
                result = `${first[number[0]]} ` + `hundred`;
            } else if(number[2] == '0' && number[1] != '0') {
                result = `${first[number[0]]} ` + `hundred ` + `${second[number[1]]}`;
            } else if(number[1] + number[2] <= 19) {
                let lastCharts = +number.slice(1, 3).join('');
                result = `${first[number[0]]} ` + `hundred ` + `${first[lastCharts]}`;
            } else {
                result = `${first[number[0]]} ` + `hundred ` + `${second[number[1]]} ` + `${first[number[2]]}`;
            }
        }
    }
    
    return result;
}
