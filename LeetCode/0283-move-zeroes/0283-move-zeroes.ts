/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    let j = 0;
    while(i < nums.length){
        if(nums[i]==0){
            i++;
        }else{
            nums[j]=nums[i]
            j++;
            i++;
        }
    }
    while( j < nums.length){
        nums[j]=0;
        j++;
    }
    console.log(nums)
};