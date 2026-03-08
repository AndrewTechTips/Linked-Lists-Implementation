import Node from "./node.js";

export default class LinkedList {

    constructor () {
        this.listHead = null;
    }

    // Add node at the beginning 

    prepend(value) {
        let tmp = null;

        if (this.listHead != null) {
            tmp = this.listHead;
        }

        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    // Add node at the end

    append(value) {
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let tmp = this.listHead;

            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = new Node(value);
        }
    }

    // get the size of the list

    size() {
        let tmp = this.listHead;
        let count = 0;

        while(tmp != null) {
            count++;
            tmp = tmp.nextNode;
        }

        return count;
    }

    // Head of the list 

    head() {
        return this.listHead;
    }
    
    //tail of the list

    tail() {
        let tmp = this.listHead;

        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }

        return tmp;
    }

    // Find a value at a given index

    at(index) {

        if (index < 0) return "Negative indexes are not accepted";

        let tmp = this.listHead;

        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;

            if (tmp == null) return "There is no item for this index";
        }

        return tmp;
    }

    // Pop an item from the end

    pop() {
        let current = this.listHead;
        let previous = null;

        while (current.nextNode != null) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
    }

    // Find if a value is in the list or not
    contains (value) {

        let tmp = this.listHead;

        while (tmp != null) {
            if (tmp.value === value) return true;

            tmp = tmp.nextNode;
        }
        return false;
    }

    // Find an element in list

    find(value) {
        let tmp = this.listHead;
        let index = 0;

        while (tmp != null) {
            if (tmp.value === value) return index;

            tmp = tmp.nextNode;
            index++;
        }

        return `Element: ${value} was not found in the list!`;
    }

    // Print the list in a beautiful way

    toString () {
        let tmp = this.listHead;
        let stringList = "";

        while(tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }
        return (stringList += "null");
    }

    // Insert an element at a given index

    insertAt (value, index) {
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let current = this.listHead;
            let previous = null;

            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.nextNode;

                if (current == null) break;  // if index is bigger than the end of the list, add node at the end of the list
            }

            const tmp = new Node(value);
            previous.nextNode = tmp;
            tmp.nextNode = current;
        }
    }

    // Remove an element at a given index

    removeAt(index) {
        if (this.listHead == null) return "The list is already empty";

        let current = this.listHead;
        let previous = null;

        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;

            if (current == null) return "There is no item for this index";
        }

        previous.nextNode = current.nextNode;
    } 
}