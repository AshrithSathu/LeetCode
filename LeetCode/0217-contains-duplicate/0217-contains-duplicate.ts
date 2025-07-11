function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number,number>()

    for(let i = 0 ; i < nums.length ; i ++ ){
        if(map.has(nums[i])){
            return true;
        }else{
            map.set(nums[i],i)
        }
    }
    return false
};