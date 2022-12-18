
function AsciiToBinary(text) {
    total = ''
    for (var i = 0; i < text.length; i++) {
        total += text[i].charCodeAt(0).toString(2) + " ";
    }
    console.log(total)
    return total
}

function BinaryToAscii(binary) {
    total = ''
    binary.split(' ').map(function(bin) {total += String.fromCharCode(parseInt(bin, 2));});
    return total
}
