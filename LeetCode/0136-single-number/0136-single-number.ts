function singleNumber(nums: number[]): number {
    let answer = nums[0];

    for(let i = 1 ; i < nums.length ; i++ ){
        answer = answer ^ nums[i];
    }
    return answer
};