
// // DATA STRUCTURES IN JAVA
// import java.util.ArrayList;
// import java.util.LinkedList;
import java.util.List;

// public class app {
//     public static void main( String[] args ) {

//         // ARRAYLIST
//          // ArrayLists are asynchonous that is "multi-threaded" as in can be accessed by multiple threads
//         ArrayList<Integer> list = new ArrayList<>(); // "<Integer" => Generic parameter
//         list.add(3);
//         list.add(5);
//         list.size();
//         list.indexOf(3); // Gets the index of element

//         System.out.println(list);

//         // LINKED LISTS
//         LinkedList<Integer> linkList = new LinkedList<>();
//         // LinkedList linkList = new LinkedList(); => Linked list to store any data type

//     }
// }

class Teacher {
    String name;
    List<Student> students;
}

class Student {
    String name;
    Teacher teacher;
}

public class TwoDArrayDemo {
    public static void main(String[] args) {

        Student newStudent = new Student();
        Teacher Allen = new Teacher();
        newStudent.name = "Jay";
        newStudent.teacher = Allen;
        Allen.students.add(newStudent);
        System.out.println(Allen);

    }
}