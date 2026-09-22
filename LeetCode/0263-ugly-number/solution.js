/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    // early return
    if (n <= 0) return false;
    // factors
    const factors = [2, 3, 5];
    for(let factor of factors){
        // This is NOT true when n is divived evenly by a factor
        while(n % factor === 0){
           // divide by each factor
            n /= factor;
        }
    }
    // n will not be 1 if it's not divisible by each factor
    return n === 1;
    
};