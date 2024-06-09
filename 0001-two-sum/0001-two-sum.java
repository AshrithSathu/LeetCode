class Solution {
    public int[] twoSum(int[] arr, int target) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        for(int i = 0 ; i < arr.length ; i++){
            hashMap.put(arr[i],i);
        }
        System.out.println(hashMap);
        
        for(int i = 0 ; i < arr.length ; i++){
            int element = target - arr[i];
            if(hashMap.containsKey(element) &&hashMap.get(element) != i ){
                return new int[]{i,hashMap.get(element)};
            }
        }
        
        
        return new int[]{-1,-1};
}
}