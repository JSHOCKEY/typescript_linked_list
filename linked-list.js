"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.length = 0;
    }
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfElements() {
        return `Number of elements: ${this.length}`;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(`Current value: ${current.value}`);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
console.log('-----');
numberList.add(10);
numberList.add(-3);
numberList.add(5);
console.log(numberList.getNumberOfElements());
numberList.print();
console.log('-----');
const nameList = new LinkedList();
nameList.add('Hello');
nameList.add('World');
nameList.add('Fizz Buzz');
console.log(nameList.getNumberOfElements());
nameList.print();
console.log('-----');
