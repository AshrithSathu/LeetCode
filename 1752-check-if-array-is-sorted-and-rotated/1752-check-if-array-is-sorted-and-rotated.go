func check(nums []int) bool {
    n := len(nums)
    count := 0
    
    for i := 0; i < n; i++ {
        if nums[i] > nums[(i+1)%n] {
            count++
        }
    }
    
    // The array is sorted and rotated if there is at most one point where nums[i] > nums[i+1]
    return count <= 1
}