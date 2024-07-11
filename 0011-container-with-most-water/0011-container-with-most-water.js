/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea = 0;
    let i = 0;
    let j = height.length-1;
    while(i < j){
        const length = Math.min(height[i],height[j]);
        const breath = j - i;
        const currentmaxarea = length*breath;
        maxarea = Math.max(maxarea,currentmaxarea);
        if ( height[i] <= height[j] ){
            i++;
        }else{
            j--;
        }
    }
    
    return maxarea;
};