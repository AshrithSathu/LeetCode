function maxArea(height: number[]): number {
    let max = 0;
    let p1 , p2 ;
    p1 = 0 , p2 = height.length - 1;
    while(p1 < p2){
       const value = (p2 - p1) * Math.min(height[p1],height[p2])
       if(value > max){
        console.log(value)
        max = value;
       }
       if(height[p1]>height[p2]){
        p2--;
       }else{
        p1++;
       }
    }
    return max;
};