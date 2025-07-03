function removeDuplicates(nums: number[]): number {
    let k = 1;
    for(let j = 1 ; j < nums.length ; j++){
            if(nums[j-1] != nums[j]){
                nums[k] = nums[j];
                k++;
            }
    }
    return k;
};