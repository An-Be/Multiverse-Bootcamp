function numberOfOddValues(array){
    let count = 0;

    for(let i in array){
        if(array[i] % 2 !== 0){
            count++
        }
    }
    return `${count} integers were odd`;
}

// console.log(numberOfOddValues([7, 55, 34, 222, 5, 32, 47, 59]));
// //prints ‘Five integers were odd.’
// console.log(numberOfOddValues([33, 103, 97]));
// //prints ‘Three integers were odd.’
// console.log(numberOfOddValues([50, 940, 90, 6, 18, 54]));
// //prints ‘No integers were odd.’
// console.log(numberOfOddValues([402, 1000, 4, 17, 34, 89, 2]));
//prints ‘Two integers were odd.’

function findMininum(array){
    let min = Math.min(...array);
    return `Lowest value is ${min}`
}

// console.log(findMininum([32, 4, 100, 47, 59]));
// //prints ‘Lowest value is 4’
// console.log(findMininum([-4, 56, -103, 99, -24]));
// //prints ‘Lowest value is -103’
// console.log(findMininum([50, 940, 99]));
// //prints ‘Lowest value is 50’
// console.log(findMininum([-18, -10, -2, 7, 0]));
// //prints ‘Lowest value is -18’

function findMininum(array){
    let min = array[0];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i+1]){
            if(array[i] < min){
                min = array[i]
            }
        }
    }
    return `Lowest value is ${min}`
}

// console.log(findMininum([32, 4, 100, 47, 59]));
// //prints ‘Lowest value is 4’
// console.log(findMininum([-4, 56, -103, 99, -24]));
// //prints ‘Lowest value is -103’
// console.log(findMininum([50, 940, 99]));
// //prints ‘Lowest value is 50’
// console.log(findMininum([-18, -10, -2, 7, 0]));
// //prints ‘Lowest value is -18’

function identifyOrder(array){

    let min = Math.min(...array);
    let max = Math.max(...array);

    if(max === min){
        return 'NEITHER';
    }
    else if(array[0] === min && array[array.length-1] === max){
        return 'INCREASING';
    }
    else if(array[0] === max && array[array.length-1] === min){
        return 'DECREASING';
    }
    else{
        return 'NEITHER';
    }
}

// console.log(identifyOrder([32, 48, 87, 99, 100, 376])); //prints ‘INCREASING!’
// console.log(identifyOrder([923, 188, 7, 0, -1, -23])); //prints ‘DECREASING.’
// console.log(identifyOrder([50, 50, 50])); //prints ‘NEITHER.’ console.log(identifyOrder([34, 18, 55, 19])); //prints ‘NEITHER.’
// console.log(identifyOrder([34, 18, 55, 19])); //prints ‘NEITHER.’

function mostRepeated(str){
    const map = {};
    let max = 0;
    let maxChar = '';
    
    for(let i of str){
        if(map[i]){
            map[i]++
        }else{
            map[i] = 1;
        }
    }

    for(let i in map){
        if(map[i] > max){
            max = map[i];
            maxChar = i;
        }
    }

    if(max === 1){
        return 'There are no repeating characters';
    }

    return `The character ${maxChar} is repeated the most and occurs ${max} times`;

}

// console.log(mostRepeated('Hello World!'));
// //prints ‘The character l is repeated the most and occurs 3 times’
// console.log(mostRepeated('jfkddtdgdldjj'));
// //prints ‘The character d is repeated the most and occurs 5 times’
// console.log(mostRepeated('True Blue'));
// //prints ‘The character u is repeated the most and occurs 2 times’ OR
// //prints ‘The character e is repeated the most and occurs 2 times’
// console.log(mostRepeated('Nothixg'));
// //prints ‘There are no repeating characters’

// function frequencyOfChars(str){
//     let string = str.split(' ').join('');
//     console.log(string);
//     const map = {};

//     for(let i of string){
//         if(map[i]){
//             map[i]++;
//         }
//         else{
//             map[i] = 1;
//         }
//     }
//     return map;
// }

// console.log(frequencyOfChars('Hello'));
// console.log(frequencyOfChars('Jonathan'));
// console.log(frequencyOfChars('Multiverse'));
// console.log(frequencyOfChars('Hello world!', '!'));

function selectionSort(array){

    let min = array[0];

    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
            let temp = array[i];
            array[i] = min;
            array[i+1] = array;
        }

    }
    return array;
}


console.log(selectionSort([44, 67, 8, 13, 210, 15, 18]));
//prints ‘[8, 13, 15, 18, 44, 67, 210]’
// console.log(selectionSort([10, 45, 10, 45, 56, 56]));
// //prints ‘[10, 10, 45, 45, 56, 56]’
// console.log(selectionSort([67, 64, 1, -9, -76, 4]));
// //prints ‘[-76, -9, 1, 4, 64, 67]’

const selectionSort = (arr) => {

    let lowIndex = 0;
    let currentMin;
    
    for(lowIndex = 0; lowIndex < arr.length; lowIndex++) {

        currentMin = arr[lowIndex];

        for(let currentIndex = lowIndex + 1; currentIndex < arr.length; currentIndex++) {
            let currentValue = arr[currentIndex];

            //if current value is less than current min
            if(currentValue < currentMin) {
                //save current value (which is lowest) at temp
                const temp  = arr[i];
                //current value is set to current low
                arr[i] = arr[lowIndex];
                //current low is set to current value (which was lower)
                arr[lowIndex] = temp;
            }
        }
    }
    return arr;
}