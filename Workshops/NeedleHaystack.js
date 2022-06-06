// // YOUR CODE
// function myIncludes(haystack, needle) {
//     let match = false
//     for(let i = 0;i < haystack.length;i++) {     
//     //   if (match) 
//     //   return match;
      
//       if(haystack[i] === needle[0]) {
//         for(let j = 0;j < needle.length;j++) {
//           if (needle[j] === haystack[i + j]) {
//               console.log(needle[j]);
//               //console.log(haystack[i]);
//               //console.log(haystack[i+j]);
//             match = true
//           } else {
//             match = false
//             break
//           }
//         }
//       }
//     }
//     return match
//   }

// YOUR CODE
function myIncludes(haystack, needle) {
    let matchedString = '';
    for (let i = 0; i <= haystack.length; i++){
        if(haystack[i] === needle[0]){
            for(let j = 0; j < needle.length; j++){
                if(needle[j] === haystack[i + j]){
                    //console.log(needle[j])
                    if(matchedString === needle){
                        break;
                    }
                    matchedString += needle[j];
                    console.log(matchedString);
                }
            }
        }
    }
    let match = matchedString === needle ? true : false;
    return match;
}

// function myIncludes(haystack, needle) {
//     for (let i = 0; i <= haystack.length; i++){
//         if(haystack[i] === needle[0]){
//             for(let j = 0; j < needle.length; j++){
//                 if(needle[j] === haystack[i + j]){
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// console.log(myIncludes('carwash', 'c'));
// console.log(myIncludes('carwash', 'a'));
// console.log(myIncludes('carwash', 'car'));
// console.log(myIncludes('carwash', 'wash'));
// console.log(myIncludes('carwash', 'ar'));
// console.log(myIncludes('carwash', 'cat'));
// console.log(myIncludes('carwash', 'dog'));
// console.log(myIncludes('what a lovely day', 'love')); // => true
// console.log(myIncludes('what a lovely day', 'al')); // => false
console.log(myIncludes('bowling ball', 'ball')); 