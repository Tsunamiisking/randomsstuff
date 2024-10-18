package Exercise.LinkedList;

import java.util.ArrayList;
import java.util.NoSuchElementException;

// import Exercise.LinkedList.Node;

public class Linkedlist {
    private Node first; // HEAD
    private Node last; // TAIL
    private int count;

    // Constructor
    // public Linkedlist(){

    // }

    // addFirst

    void addFirst(int e) {
        // Create node and point node to head (First)
        Node newNode = new Node(e);
        if (first == null) {
            first = last = newNode;
        } else {
            newNode.next = first;
            first = newNode;
        }
        count++;
    }

    // addlast
    void addLast(int e) {
        // Create node and point node to tail (Last)
        Node newNode = new Node(e);

        if (first == null) {
            first = last = newNode;
        } else {
            last.next = newNode;
            last = newNode;
        }

        // newNode.next = last;
        // last = newNode;
        count++;
    }

    // deleteFirst
    void deleteFirst() {

        if (first == last) {
            first = last = null;
            return;
        }

        if (first != null) {
            Node second = first.next;
            first.next = null;
            first = second;
        } else {
            throw new NoSuchElementException();
        }
    }

    // deleteLast
    void deleteLast() {

        if (first == last) {
            first = last = null;
            return;
        }
        if (first == null || last == null) {
            throw new NoSuchElementException();
        }

        Node beforeLast = first;
        while (beforeLast.next != null) {
            if (beforeLast.next == last) {
                last = beforeLast;
                beforeLast.next = null;
                break;
            }
            beforeLast = beforeLast.next;
        }
    }

    // comtains
    boolean contains(int e) {
        Node currentNode = first;

        while (currentNode != null) {
            if (currentNode.value == e) {
                return true;
            } else {
                currentNode = currentNode.next;

            }
        }

        return false;
    }

    // indexOf
    void indexOf(int e) {
        Node currentNode = first;
        int index = 0;
        while (currentNode.next != null) {
            // System.out.println("At index " + i + ", value is: " + currentNode.value);
            if (currentNode.value == e) {
                System.out.printf("Index of %d is %d \n", e, index);
                return;
            }
            index++;
            currentNode = currentNode.next;
        }
        System.out.println("Value is not in list");
    }

    public static void main(String[] args) {
        Linkedlist list = new Linkedlist();
        list.addFirst(6);
        list.addLast(5);
        list.addFirst(26);
        list.deleteFirst();
        list.addLast(3);

        list.indexOf(5);

        System.out.println(list.contains(8));
    }

}