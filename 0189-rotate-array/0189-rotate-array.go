func rotate(nums []int, k int)  {
    length := len(nums);
    result := make([]int, length)
    for i:= 0 ; i < len(nums) ; i++ {
        result[(i+k)%len(nums)]=nums[i];
    }
    for j:=0 ; j<len(nums) ; j++ {
        nums[j]=result[j];
    }
}