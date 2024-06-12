func singleNumber(nums []int) int {
    ans := nums[0];
    length := len(nums);
    for i:=0 ; i< length - 1 ; i++{
        ans = ans^nums[i+1];
    }
    return ans
}