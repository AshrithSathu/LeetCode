class Solution {
    public int[] sortedSquares(int[] nums) {
        int length = nums.length;
        int arr[] = new int[length];
        for(int i = 0 ; i< nums.length ; i++){
            nums[i] = nums[i]*nums[i];
            System.out.print(nums[i]);
        }
        Arrays.sort(nums);
        return nums;
    }
}