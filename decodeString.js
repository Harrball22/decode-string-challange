// Write your code below this line

function decode(str){
    let decodedStr = ""
    let keyDigits = ""
    let keyIsNegative = false
    for(let i = 0; i < str.length; i++){
        if (isNaN(Number(str[i])) === false){
            keyDigits = keyDigits + str[i]
            console.log(Number(str[i]))
            console.log(keyDigits)
        } else if (str[i] === "-"){
            keyIsNegative = true
        }
    }

    if (keyIsNegative){
        keyDigits = "-" + keyDigits
    }

    let key = Number(keyDigits)

    for(let i = keyDigits.length; i != str.length; i++){
        decodedStr = decodedStr + decodeChar(str[i], key)
    }

    console.log(decodedStr)
}

function decodeChar(char, key){
    let charValue = 0
    let decodedChar = ""
    let isLowerCase = true
    if (char === char.toUpperCase()){
        char = char.toLowerCase()
        isLowerCase = false
    }

    switch(char){
        case "a":
            charValue = 1
            break
        case "b":
            charValue = 2
            break
        case "c":
            charValue = 3
            break
        case "d":
            charValue = 4
            break
        case "e":
            charValue = 5
            break
        case "f":
            charValue = 6
            break
        case "g":
            charValue = 7
            break
        case "h":
            charValue = 8
            break
        case "i":
            charValue = 9
            break
        case "j":
            charValue = 10
            break
        case "k":
            charValue = 11
            break
        case "l":
            charValue = 12
            break
        case "m":
            charValue = 13
            break
        case "n":
            charValue = 14
            break
        case "o":
            charValue = 15
            break
        case "p":
            charValue = 16
            break
        case "q":
            charValue = 17
            break
        case "r":
            charValue = 18
            break
        case "s":
            charValue = 19
            break
        case "t":
            charValue = 20
            break
        case "u":
            charValue = 21
            break
        case "v":
            charValue = 22
            break
        case "w":
            charValue = 23
            break
        case "x":
            charValue = 24
            break
        case "y":
            charValue = 25
            break
        case "z":
            charValue = 26
            break
    }

    charValue += key
    while (charValue > 26){
        charValue -= 26
    }
    while (charValue < 1){
        charValue += 26
    }

    switch(charValue){
        case 1:
            decodedChar = "a"
            break
        case 2:
            decodedChar = "b"
            break
        case 3:
            decodedChar = "c"
            break
        case 4:
            decodedChar = "d"
            break
        case 5:
            decodedChar = "e"
            break
        case 6:
            decodedChar = "f"
            break
        case 7:
            decodedChar = "g"
            break
        case 8:
            decodedChar = "h"
            break
        case 9:
            decodedChar = "i"
            break
        case 10:
            decodedChar = "j"
            break
        case 11:
            decodedChar = "k"
            break
        case 12:
            decodedChar = "l"
            break
        case 13:
            decodedChar = "m"
            break
        case 14:
            decodedChar = "n"
            break
        case 15:
            decodedChar = "o"
            break
        case 16:
            decodedChar = "p"
            break
        case 17:
            decodedChar = "q"
            break
        case 18:
            decodedChar = "r"
            break
        case 19:
            decodedChar = "s"
            break
        case 20:
            decodedChar = "t"
            break
        case 21:
            decodedChar = "u"
            break
        case 22:
            decodedChar = "v"
            break
        case 23:
            decodedChar = "w"
            break
        case 24:
            decodedChar = "x"
            break
        case 25:
            decodedChar = "y"
            break
        case 26:
            decodedChar = "z"
            break
    }

    if (isLowerCase === false){
        decodedChar = decodedChar.toUpperCase()
    }

    return(decodedChar)
}

decode("-2Harrison")