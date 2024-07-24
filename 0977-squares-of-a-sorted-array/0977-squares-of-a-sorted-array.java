class Solution {
    public int[] sortedSquares(int[] nums) {
        int length = nums.length;
        int[] arr = new int[length];
        int left = 0;
        int right = length - 1;
        int index = length - 1;

        while (left <= right) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];

            if (leftSquare > rightSquare) {
                arr[index] = leftSquare;
                left++;
            } else {
                arr[index] = rightSquare;
                right--;
            }
            index--;
        }

        return arr;
    }
}
