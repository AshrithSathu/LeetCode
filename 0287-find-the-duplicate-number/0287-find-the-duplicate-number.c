int findDuplicate(int* nums, int numsSize) {
    for (int i = 0; i < numsSize; i++) {
        nums[nums[i] % numsSize] = nums[nums[i] % numsSize] + numsSize;
    }
    
    for (int i = 0; i < numsSize; i++) {
        if ((nums[i] / numsSize) > 1) {
            return i;  // This line should return the duplicate element, not its index
        }
    }
    return -1;
}
