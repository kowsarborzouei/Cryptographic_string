let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'];
let str_new = []
function cryptographic(str_len, repeat, str) {
    if (typeof str === "string") {
        str = str.split('')
    }
    for (let k = 0; k < repeat; k++) {
        let n = str.length;
        let temp = str_len - 1
        str_len = str_len % n;
        let first_x_element = str.slice(0, temp)
        let remaining_element = str.slice(temp, n)
        str = [...remaining_element, ...first_x_element]
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (alphabet[j] === str[i]) {
                    str_new[i] = alphabet[j + 1]
                    break
                }
            }
        }
        str = str_new;
    }
    str = str.toString()
    let stringWithoutComma = str.replace(/,/g, '')
    console.log("Final String: " + stringWithoutComma)
}
cryptographic(4, 5, 'abcd')