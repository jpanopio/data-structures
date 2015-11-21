// Implement a doublyLinkedList
var DoublyLinkedList = function(){
  var dLL = {};

  dLL.head = null;
  dLL.tail = null;

  dLL.addToTail = function(value) {
    var newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };

  dLL.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    if(this.head !== null) {
      this.head.previous = null;
    }
    return removed;
  };

  dLL.contains = function(target) {
    var current = this.head;
    while(current){
      if(current.value === target){
        return true;
      }
      current = current.next;
    }
    return false;
  };


  dLL.addToHead = function(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  };

  dLL.removeTail = function() {
    var removed = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return removed;
  };

  return dLL;
}

var Node = function(value){
  var newNode = {};

  newNode.value = value;
  newNode.previous = null;
  newNode.next = null;

  return newNode;
}