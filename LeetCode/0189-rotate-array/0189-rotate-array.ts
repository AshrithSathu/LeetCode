/**
 Do not return anything, modify nums in-place instead.
 */

 function reverse(nums : number[] , start : number , end:number){
        while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
 }

function rotate(nums: number[], k: number): void {
    if(k > nums.length){
        k = k % nums.length
    }
    reverse(nums,0,nums.length - 1);
    console.log("step1",nums)

    reverse(nums,0,k-1)
    console.log("step2",nums)

    reverse(nums,k,nums.length-1)    
    console.log("step3",nums)
};