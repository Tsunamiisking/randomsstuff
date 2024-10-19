package Exercise.Sorting.Bubblesort;

public class bubblesort {

    int[] sort( int[] e) {
        for (int i = 0; i < e.length - 1; i++) {
            for (int j = i+1; j < e.length; j++) {
                if ( e[i] > e[j]) {
                    int temp = e[j];
                    e[j] = e[i];
                    e[i] = temp;

                   
                }
            }
        }
        return e;
    }   

    public static void main(String[] args) {

        bubblesort sorting = new bubblesort();
        
        int[] e = {3, 34, 54, 7, 65, 4, 21, 4, 4 };
        
        int[] sortedarr =  sorting.sort(e);
        
        System.out.println(sortedarr);
        
    }
}
