class Solution {
    public int diagonalSum(int[][] mat) {
        int r = mat.length;
        int c = mat[0].length;
        int sum = 0;
        for(int rowNumber = 0 ; rowNumber < r ; rowNumber++ ){
            int primaryDiagonal = mat[rowNumber][rowNumber];
            int secondaryDiagonal = mat[rowNumber][c - rowNumber - 1 ];
            
            sum = sum + primaryDiagonal;
            if(rowNumber != c - rowNumber - 1){
                sum = sum + secondaryDiagonal;
            }
        }
        return sum;
    }
}