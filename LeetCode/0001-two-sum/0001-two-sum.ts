function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i],i);
    }
    console.log(map)

    for(let i = 0 ; i < nums.length ; i++){
        let n = target - nums[i];
        if(map.has(n) && map.get(n) != i){
            return[i,map.get(n)]
        }
    }
};