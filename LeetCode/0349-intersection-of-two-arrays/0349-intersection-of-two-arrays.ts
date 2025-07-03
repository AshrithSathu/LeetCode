function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set()
    const set2 = new Set()

    for(let i = 0 ; i < nums1.length ; i ++){
        set1.add(nums1[i])
    }
    for(let i = 0 ; i < nums2.length ; i ++){
        set2.add(nums2[i])
    }
    const nums = [...set1]
    let answer = new Array();
    for(let i = 0 ; i < nums.length ; i++){
        if(set2.has(nums[i])){
            answer.push(nums[i])
        }
    }
    return answer

};