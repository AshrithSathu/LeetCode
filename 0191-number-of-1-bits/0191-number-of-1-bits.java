class Solution {
    public int hammingWeight(int n) {
        int x = n;
        int count = 0;
        
        while (x != 0){
            if((x & 1) == 1){
                count++;
            }
            x = x >> 1;
        }
        
        // System.out.println(count);
        return count;
    }
}