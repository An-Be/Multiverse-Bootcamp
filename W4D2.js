function isNumberNarcissistic(n){
    let str = n.toString();
    let ex = str.length;
    let sum = 0;

    for (i in str){
        let num = Math.pow(str[i], ex);
        sum += num;
    }
    
    if (sum === n){
        return true;
    }
    return false;
}

console.log(isNumberNarcissistic(153))
console.log(isNumberNarcissistic(1))
console.log(isNumberNarcissistic(435))
console.log(isNumberNarcissistic(370))
console.log(isNumberNarcissistic(324))