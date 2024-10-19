package Exercise.Sorting.SelectionSort;

import java.util.Arrays;

public class Selection {
    
    void sort( int[] e) {
        for (int i = 0; i < e.length - 1; i++) {
            for (int j = i+1; j < e.length; j++) {
                if ( e[i] > e[j]) {
                    int temp = e[j];
                    e[j] = e[i];
                    e[i] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(e));
    }   

    public static void main(String[] args) {

        Selection sorting = new Selection();
        
        int[] e = {3, 34, 54, 7, 65, 4, 21, 4, 4 };
        
        sorting.sort(e);
        
    }
}
