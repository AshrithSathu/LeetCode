class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> list = new ArrayList<>();
        int n = matrix.length;
        int m = matrix[0].length;
        int start_row = 0;
        int last_row = n - 1;
        int start_col = 0;
        int last_col = m - 1;
        int count = n * m;

        while (count > 0) {
            for (int i = start_col; i <= last_col; i++) {
                list.add(matrix[start_row][i]);
                count--;
            }
            start_row++;
            if (count == 0) break;

            for (int i = start_row; i <= last_row; i++) {
                list.add(matrix[i][last_col]);
                count--;
            }
            last_col--;
            if (count == 0) break;

            if (start_row <= last_row) {
                for (int i = last_col; i >= start_col; i--) {
                    list.add(matrix[last_row][i]);
                    count--;
                }
                last_row--;
                if (count == 0) break;
            }

            if (start_col <= last_col) {
                for (int i = last_row; i >= start_row ; i--) {
                    list.add(matrix[i][start_col]);
                    count--;
                }
                start_col++;
                if (count == 0) break;
            }
        }

        return list;
    }
}