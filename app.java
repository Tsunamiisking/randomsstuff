// DATA STRUCTURES IN JAVA
import java.util.ArrayList;
import java.util.LinkedList;

public class app {
    public static void main( String[] args ) {

        // ARRAYLIST
         // ArrayLists are asynchonous that is "multi-threaded" as in can be accessed by multiple threads
        ArrayList<Integer> list = new ArrayList<>(); // "<Integer" => Generic parameter
        list.add(3);
        list.add(5);
        list.size();
        list.indexOf(3); // Gets the index of element

        System.out.println(list);


        // LINKED LISTS
        LinkedList<Integer> linkList = new LinkedList<>();
        // LinkedList linkList = new LinkedList(); => Linked list to store any data type
        
    }
}