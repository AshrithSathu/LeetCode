/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let x =  s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(x);
    let y = x.split("").reverse().join("").toLowerCase();
    console.log(y);
    
    return x==y;
};