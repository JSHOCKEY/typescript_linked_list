class ListNode<T> {
  next?: ListNode<T>;

  constructor(public value: T) { }
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
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

console.log('-----')
const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(-3);
numberList.add(5);
console.log(numberList.getNumberOfElements());
numberList.print();

console.log('-----')
const nameList = new LinkedList<string>();

nameList.add('Hello');
nameList.add('World');
nameList.add('Fizz Buzz');
console.log(nameList.getNumberOfElements());
nameList.print();