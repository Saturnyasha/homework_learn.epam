// In a try catch construction, wrap the code: 
//console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.
// When running 1/0, the error 'cannot be divided by zero'

try {
console.log(a);
let a = 3;
} catch {
    console.log('let must be declared');
};



let divide = (a,b) => {
    try {
        if (b==0) {
            throw new Error('cannot be divided by zero');
        } return a/b;
    } catch(error) {
            console.log(error.name);
            console.log(error.message);
    }
}
console.log(divide(1,0)); // Error cannot be divided by zero
console.log(divide(1,2));// 0.5
console.log(divide(10,2));// 5