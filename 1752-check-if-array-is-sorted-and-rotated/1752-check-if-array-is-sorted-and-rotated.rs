impl Solution {
    pub fn check(nums: Vec<i32>) -> bool {
        let mut count = 0;
        let n = nums.len();

        for i in 1..n {
            if nums[i-1] > nums[i] {
                count += 1;
            }
        }

        if nums[n-1] > nums[0] {
            count += 1;
        }

        count <= 1
    }
}
