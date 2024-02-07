class Solution {
public:
    int pivotIndex(vector<int>& nums) {

        int n =nums.size();
        int totalSum=0;
        int leftSum=0;

        for(int i=0;i<n;i++){
            totalSum+=nums[i];
        }

        for(int i=0;i<n;i++){
            int rightSum=totalSum-nums[i]-leftSum;

            if(leftSum==rightSum){
                return i;
            }
            else{
                leftSum+=nums[i];
            }
        }

        return -1;
        
    }
};