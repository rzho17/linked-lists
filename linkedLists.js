class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const makeList = (data) => {
  const str = `( ${data} ) -->`;

  return str;
};

class LinkedLists {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current;
    let list = "";

    if (this.head === null) {
      console.log("empty");
    } else {
      current = this.head;

      while (current !== null) {
        list += makeList(current.value);

        current = current.nextNode;
      }
    }
    list += " null";
    console.log(list);
  }

  append(data) {
    const newNode = new Node(data);
    let current;

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
    this.size += 1;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current;

    if (this.head === null) {
      return this.head;
    }
    current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  atIndex(index) {
    let current;
    let counter = 0;

    if (index < 0) {
      return console.log("invalid index");
    }
    if (index >= this.size) {
      return console.log("index out of bounds error");
    }

    current = this.head;
    while (counter < index) {
      counter++;
      current = current.nextNode;

      //   console.log(counter);
      //   console.log(current.value);
    }

    return console.log(current.value);
  }

  pop() {
    let current;
    let prev = null;

    if (this.head === null) {
      return undefined;
    }

    current = this.head;

    while (current.nextNode) {
      prev = current;
      current = current.nextNode;

      //   console.log(current);
    }
    prev.nextNode = current.nextNode;
    this.size -= 1;
  }

  contains(data) {
    let current;

    if (this.head === null) {
      return undefined;
    }

    current = this.head;
    while (current.nextNode) {
      current = current.nextNode;

      if (current.value === data) {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current;
    let counter = 0;

    if (this.head === null) {
      return undefined;
    }

    current = this.head;

    while (current.nextNode) {
      if (current.value === data) {
        return counter;
      }
      current = current.nextNode;
      counter++;
    }
    return null;
  }
}

const ll = new LinkedLists();

ll.prepend(100);
ll.prepend(200);

ll.append("adsf");
ll.append("new tail");

ll.printList();

ll.pop();
ll.printList();
