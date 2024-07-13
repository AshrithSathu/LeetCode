/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const helper = (s) => {
        const stack = [];
        for ( let i = 0 ; i < s.length ; i++ ){
            if(s[i]==="#"){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
        return stack.join("");
    }
    const one = helper(s);
    console.log(one);
    const two = helper(t);
    console.log(two);
    
    return one===two;
};