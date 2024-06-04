class Solution {
    public int[] countBits(int n) {
        int arr[] = new int[n+1];
        for(int i = 0 ; i < n+1 ; i++){
            int j = i;
            while(j!=0){
            if( (j & 1) == 1){
                arr[i] = arr[i] + 1;
            }
                j = j>>1;
            }
        }
        return arr;
    }
}