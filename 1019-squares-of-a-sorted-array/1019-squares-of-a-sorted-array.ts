function sortedSquares(nums: number[]): number[] {
    
    const newArr = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    
    for ( let i = nums.length - 1 ; i >= 0 ; i-- ){
        const leftsquare = Math.pow(nums[left],2);
        const rightsquare = Math.pow(nums[right],2);
        
        if (leftsquare > rightsquare){
            newArr[i] = leftsquare;
            left++;
        }else{
            newArr[i] = rightsquare;
            right--;
        }
    }
    return newArr;
};