function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map()
    for(let i = 0 ; i < nums2.length ; i++){
        map.set(nums2[i],(map.has(nums2[i]) ? map.get(nums2[i]) + 1 : 1))
    }
    let answer = new Array()

    for(let i = 0 ; i < nums1.length ; i++){
        if(map.get(nums1[i])>0){
            answer.push(nums1[i])
            console.log(answer)
            map.set(nums1[i],map.get(nums1[i]) - 1)
        }
    }
    return answer
};