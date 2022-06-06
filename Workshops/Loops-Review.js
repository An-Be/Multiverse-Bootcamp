// function indexOfChar(str, char){
//     for(let i in str){
//         //console.log(`is ${str[i]} also known as str[${i}] equal to ${char}?`)
//         if(str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }
//console.log(indexOfChar('Hello', 'l'));
//prints ‘2’
// console.log(indexOfChar('Jonathan', 't'));
// //prints ‘4’
// console.log(indexOfChar('Multiverse', 'x'));
// //prints ‘-1’
// console.log(indexOfChar('Hello', 'H'));
// //prints ‘0’
// console.log(indexOfChar('Hello World!', '!'));

// ******************************************************************************************************** //

// function findDouble(str){
//     let string = str.toLowerCase();
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === string[i+1]){
//             return string[i] + string[i];
//         }
//     }
//     return 'No pairs of letters were found'
// }

// console.log(findDouble('Hello'));
// //prints ‘ll’
// console.log(findDouble('funny'));
// //prints ‘nn’
// console.log(findDouble('Aardvark'));
// //prints ‘aa’.
// console.log(findDouble('snakes'));
// //prints ‘No pairs of letters found’

// ******************************************************************************************************** //


// function loopsRandomly(){
//     let count = 0;
//     while(true){
//         const randNum = Math.floor(Math.random() * 5) + 1;
//         console.log(`Random number is ${randNum}`)
//         if(randNum === 1 || randNum === 5){
//             console.log("Loop has ended!");
//             break;
//         }
//         count++;
//     }
//     console.log(`Number of times a number was generated: ${count}`);

// }

// loopsRandomly();
// loopsRandomly();
// loopsRandomly();

// ******************************************************************************************************** //

function mostRepeated(str){
    let string = str.toLowerCase();

    const map = {};
    let max = 0;
    let finalChar = '';

    for(let char of string){
        if(map[char]){
            map[char]++;
        }
        else{
            map[char] = 1;
        }
    }
    for(let char in map){
        if(map[char] > max){
            max = map[char];
            finalChar = char;
        }
    }
    if(max === 0){
        return 'There are no repeating characters';
    }

    return `The character ${finalChar} is repeated the most and occurs ${max} times`;
}


console.log(mostRepeated('Hello World!'));
//prints ‘The character l is repeated the most and occurs 3 times’
console.log(mostRepeated('jfkddtdgdldjj'));
//prints ‘The character d is repeated the most and occurs 5 times’
console.log(mostRepeated('True Blue'));
//prints ‘The character u is repeated the most and occurs 2 times’ OR
//prints ‘The character e is repeated the most and occurs 2 times’
console.log(mostRepeated('Nothixg'));
//prints ‘There are no repeating characters’



// function mostRepeated(str){
//     let string = str.toLowerCase();
//     let string1 = '';
//     let count = 0;
//     let maxCount = 0;

//     for(let i = 0; i < string.length; i++){
//         for(let j = 0; j < string.length; j++){
//             if(string[i] === string[j+1]){
//                 console.log(`j: ${string[j+1]}`);
//                 console.log(`i: ${string[i]}`);
//                 count++
//             }
//         }
//         if(maxCount < count){
//             maxCount = count;
//         }
//     }
//     return maxCount;

// }



// console.log(mostRepeated('Hello World!'));
//prints ‘The character l is repeated the most and occurs 3 times’
// console.log(mostRepeated('jfkddtdgdldjj'));
// //prints ‘The character d is repeated the most and occurs 5 times’
// console.log(mostRepeated('True Blue'));
// //prints ‘The character u is repeated the most and occurs 2 times’ OR
// //prints ‘The character e is repeated the most and occurs 2 times’
// console.log(mostRepeated('Nothixg'));
//prints ‘There are no repeating characters’