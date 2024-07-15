/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashmap = { };
    let longest = 0;
    let start = 0;
    let i = 0;
    while( i < s.length){
        if(hashmap[s[i]] >= start){ 
            start = hashmap[s[i]] + 1; 
        }
        hashmap[s[i]] = i; 
        longest = Math.max(longest, i - start + 1); 
        i++;
    }
    return longest;
};
