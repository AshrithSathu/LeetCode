function topKFrequent(nums: number[], k: number): number[] {
    const initmap = new Map();
    if(nums.length==1){
        return [...nums]
    }
    for(const num of nums){
        if (initmap.has(num)){
            let value = initmap.get(num)
            value = value + 1;
            initmap.set(num,value)
        }else{
            initmap.set(num,1)
        }
    }
    console.log("initmap",initmap)

    const bucket = new Map<number,number[]>

    for(const [i,val] of initmap.entries()){
        if(bucket.has(val)){
            bucket.get(val).push(i)
        }else{
            bucket.set(val,[i])
        }
    }
    console.log("bucket",bucket)
    const ans = []
  for (let freq = nums.length; freq >= 1; freq--) {
    if (bucket.has(freq)) {
      ans.push(...bucket.get(freq)!);
      if (ans.length >= k) return ans.slice(0, k);
    }
  }
    return []
};