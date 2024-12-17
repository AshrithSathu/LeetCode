function isMonotonic(nums: number[]): boolean {
    if ( nums.length == 0) return false;
    let first = nums[0];
    let last = nums[nums.length - 1];

    if(first === last){
        for(let i = 0 ; i < nums.length - 1 ; i ++){
            if(nums[i+1] !== nums[i]) return false;
        }
    }else if (first > last){
        for(let i = 0 ; i < nums.length - 1 ; i ++){
            if(nums[i] < nums[i+1]) return false;
        }
    }else{
        for(let i = 0 ; i < nums.length - 1 ; i ++){
            if(nums[i] > nums[i+1]) return false;
        }
    }
    return true;
};