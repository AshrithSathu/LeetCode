class Solution {
    public void sortColors(int[] nums) {
        int x , y , z;
        x = y = z = 0;
        
        for(int i = 0 ; i < nums.length ; i++){
            if(nums[i]==0){
                x++;
            }
            if(nums[i]==1){
                y++;
            }
            if(nums[i]==2){
                z++;
            }
        }
        System.out.print(x);
        System.out.print(y);
        System.out.print(z);
        for(int i = 0 ; i <= x-1 ; i++){
                nums[i]=0;
        }
        for(int i = x ; i< x+y ; i++){
            nums[i]=1;
        }
        for(int i = x+y ; i<x+y+z ; i++){
            nums[i]=2;
        }
    }
}