function makesATriangle(num1, num2, num3){
    if(num1 > 0 && num2 > 0 && num3 > 0){
        if(num3 < num1 + num2 && num2 < num3 + num1 && num1 < num2 + num3){
            return `${num1}, ${num2}, and ${num3} CAN make a triangle`
        }
        else{
            return `${num1}, ${num2}, and ${num3}  CANNOT make a triangle`
        }
    }
    else{
        return `${num1}, ${num2}, and ${num3}  CANNOT make a triangle`
    }
}

// console.log(makesATriangle(5, 0, 3));
// //prints ‘5, 0, and 3 CANNOT make a triangle’
// console.log(makesATriangle(6, 5, 7));
// //prints ‘6, 5, and 7 CAN make a triangle’
// console.log(makesATriangle(7, 15, 4));
// //prints ‘7, 15, and 4 CANNOT make a triangle’
// console.log(makesATriangle(20, 100, 100));
// //prints ‘20, 100, and 100 CAN make a      

// function frequencyOfCharacters(str){
//     const map = {};

//     for(let i = 0; i< str.length; i++){
//             if(str[i] === ' '){
//                 continue;
//             }
//             if(map[str[i]]){
//                 map[str[i]]++;
//             }
//             else{
//                 map[str[i]] = 1;
//             }
//     }
//     return map;
// }

// console.log(frequencyOfCharacters('Hello'));
// console.log(frequencyOfCharacters('Jonathan'));
// console.log(frequencyOfCharacters('Multiverse'));
// console.log(frequencyOfCharacters('Hello world!', '!'));
