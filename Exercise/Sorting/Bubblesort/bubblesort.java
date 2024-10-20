package Exercise.Sorting.Bubblesort;

import java.util.Arrays;

class bubblesort {

    void sort(int[] e) {

        for (int i = 0; i < e.length - 1; i++) {
            for (int j = 0; j < e.length - i - 1; j++) {
                if (e[j] > e[j + 1]) {
                    int temp = e[j];
                    e[j] = e[j + 1];
                    e[j + 1 ] = temp;

                }
            }
        }
        System.out.println(Arrays.toString(e));
    }


    public static void main(String[] args) {


        bubblesort sorting = new bubblesort();

        int[] e = { 3, 34, 54, 7, 65, 4, 21, 4, 4 };

        sorting.sort(e);
    }

}