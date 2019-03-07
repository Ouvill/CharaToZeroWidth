const zeroPad = num => '00000000'.slice(String(num).length) + num;

const textToBinary = username => (
    username.split('').map(char => zeroPad(char.charCodeAt(0).toString(2))).join(' ')
);

const binaryToZeroWidth = binary => (
    binary.split('').map((binaryNum) => {
        const num = parseInt(binaryNum, 10);
        if (num === 1) {
            return '​'; // invisible &#8203;
        } else if (num === 0) {
            return '‌'; // invisible &#8204;
        }
        return '‍'; // invisible &#8205;
    }).join('﻿') // invisible &#65279;
);

const zeroWidthToBinary = string => (
    string.split('﻿').map((char) => { // invisible &#65279;
        if (char === '​') { // invisible &#8203;
            return '1';
        } else if (char === '‌') { // invisible &#8204;
            return '0';
        }
        return ' '; // split up binary with spaces;
    }).join('')
);

const binaryToText = string => (
    string.split(' ').map(num => String.fromCharCode(parseInt(num, 2))).join('')
);

const chara_to_zero_width = {

    encode: function encode(text) {
        const binaryText = textToBinary(text);
        const zeroWidthText = binaryToZeroWidth(binaryText);
        return zeroWidthText;
    },

    decode: function decode(zeroWidthText) {
        const binaryText = zeroWidthToBinary(zeroWidthText);
        const text = binaryToText(binaryText);
        return text;
    }
};

module.exports = chara_to_zero_width;
