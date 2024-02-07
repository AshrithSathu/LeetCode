class Solution {
public:
    int bitwiseComplement(int n) {
        int m = n;
        int temp = 0;
        if(m==0){
            return 1;
        }
        while(m!=0){
            temp = (temp<<1)|1;
            m = m>>1;
        }
        int ans = (~n)&temp;

        return ans;
        
    }
};