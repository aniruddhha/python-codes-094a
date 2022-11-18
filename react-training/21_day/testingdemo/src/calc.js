export function addition(num1, num2) {
    if(num2 < 0) return num1
    if(num1 < 34 || num1 >78 ) return (num1*num1) + num2
    return num1 + num2
}




// num2 should not be negative
// num1 must be in the range of 34 to 78, 
// otherwise make square of num1