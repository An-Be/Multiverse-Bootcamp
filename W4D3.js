function maskify(password){

    let str = password.toString();
    let arr = str.split('');
    
    let lastFour = arr.slice(-4);
    let firstHalf = '';

    for(let i = 0; i < arr.length - 4; i++){
        firstHalf += '#'
    }

    let lastHalf = lastFour.join("");
    
    return firstHalf + lastHalf;
}




console.log(maskify(12345678));
console.log(maskify(4556364607935616)); // => "############5616"
console.log(maskify(     64607935616)); // =>      "#######5616"
console.log(maskify(               1)); // =>                "1"
console.log(maskify(              "")); // =>                 ""
// "What was the name of your first pet?"
console.log(maskify("Skippy"));                           // => "##ippy"
console.log(maskify("Nananananananananananana Batman!")); // => "############################man!"                            == "##ippy" maskify("Nananananananananananananananana Batman!") == "####################################man!"