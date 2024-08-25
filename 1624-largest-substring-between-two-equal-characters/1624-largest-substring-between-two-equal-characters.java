class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        int indices[] = new int[26];
        int maxlen = -1;
        
        for(int i = 0 ; i < s.length() ; i++){
            int index = s.charAt(i) - 'a';
            
            if(indices[index]>0){
                maxlen = Math.max(maxlen , i - indices[index]);
                
            }else{
                indices[index] = i+1;
            }
        }
        return maxlen;
    }
}