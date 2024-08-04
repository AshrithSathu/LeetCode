class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int m = nums2.length;
        int i = 0 , j = 0;
        while( n>0 && m>0 ){
            if(nums1[i]>nums2[j]){
                j++;
                m--;
            }else if(nums1[i]<nums2[j]){
                i++;
                n--;
            }else if(nums1[i]==nums2[j]){
                return nums1[i];
            }
        }
        return -1;
        
    }
}