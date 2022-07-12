function stringLength(str){
    if (str.length > 0 && str.length < 11) return str.length;
    if (str.length < 1 ) return 'This string is empty';
    if (str.length > 10 ) return 'This string is too long';
}

module.exports = stringLength;