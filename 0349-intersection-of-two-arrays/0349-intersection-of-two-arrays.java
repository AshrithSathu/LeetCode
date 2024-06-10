class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<Integer>();
        Set<Integer> resultSet = new HashSet<Integer>();
        for (int num : nums1) {
            set.add(num);
        }
        for (int i = 0; i < nums2.length; i++) {
            if (set.contains(nums2[i])) {
                resultSet.add(nums2[i]);
            }
        }
        int count = 0;
        int[] result = new int[resultSet.size()];
        for (Integer val : resultSet) {
            result[count++] = val;
        }
        return result;
    }
}