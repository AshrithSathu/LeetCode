class Solution {
    public int bitwiseComplement(int n) {
        if(n==0) return 1;
        int number = n;
        int mask = 0;
        while( number != 0 ){
            number = number >> 1;
            mask = mask << 1 | 1;
        }
        
        return (~n)&mask;
        
    }
}