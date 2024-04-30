
function spaceSep(string="0"){ // seperate into array of words using spaces

    if (spaceSep == "0"){
        return(string);
    }

    let final = [];

    string = " "+string+" ";
    
    for (i=0; i<string.length;i++){
        if (string[i] == " "){
            for (j=i+1;j<string.length;j++){
                if (string[j]==" "){
                    final.push(string.slice(i+1, j));
                    break;
                }
            }
        }
    }
    for (x=0;x<final.length;x++){ // remove excess spaces
        if (final[x] == ""){
            final.splice(x, 1);
            x--;
        }
    }
    return (final);
}

const isAlpha = str => /^[a-zA-Zα-ωΑ-Ω]*$/.test(str); // check if char is in the alphabet (latin and greek)

function numSep(arr){ // seperate non-alphabetical characters from anything else
    // arr: spaceSep(string)

    let final = [];

    for (word of arr){
        for(i=0;i<word.length;i++){
            if (i+1 >= word.length){
                final.push(word);
            } else if ((isAlpha(word[i]) && !isAlpha(word[i+1])) || (!isAlpha(word[i]) && isAlpha(word[i+1]))){
                final.push(word.slice(0, i+1));
                word = word.slice(i+1);
                i=-1;
            }
        }
    }
    return (final); 
}

function charSep(arr){ // seperate special characters from numbers and letters
    let final = [];

    charList = ['-'];
    const specialChar = str => charList.includes(str);

    for (word of arr){ // seperate numbers/letters from characters
        for(i=0;i<word.length;i++){
            if (specialChar(word[i])){
                final.push(word.slice(0, i));
                final.push(word[i]);
                word = word.slice(i+1);
                i=-1;
            }
        }
        final.push(word);
    }

    for (x=0;x<final.length;x++){ // remove blank strings left behind by loop
        if (final[x] == ""){
            final.splice(x, 1);
            x--;
        }
    }
    return (final);

}


function parse(string){
    let final = spaceSep(string);
    console.log(final);

    final = numSep(final);
    console.log(final);

    final = charSep(final);
    console.log(final);

    return (final);
}

let arr = parse("");
