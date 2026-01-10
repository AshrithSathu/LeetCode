function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        let number = target - nums[i];
        if(map.has(number)){
            return [map.get(number),i]
        }else{
            map.set(nums[i],i);
        }
    }
    return[]
};