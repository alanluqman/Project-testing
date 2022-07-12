function capitalize(str){
    let text = str.split('');
    text[0]=text[0].toUpperCase();
    return text.join('');
}

module.exports = capitalize;

console.log(capitalize('alan'));