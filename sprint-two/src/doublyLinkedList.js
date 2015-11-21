// Implement a doublyLinkedList
var DoublyLinkedList = function(){
  var dLL = {};

  dLL.head = null;
  dLL.tail = null;

  dLL.addToTail = function(value) {};

  dLL.removeHead = function() {};

  dLL.contains = function(target) {};

  dLL.addToHead = function(value) {};

  dLL.removeTail = function() {};

  return dLL;
}

var Node = function(value){
  var newNode = {};

  newNode.value = value;
  newNode.previous = null;
  newNode.next = null;

  return newNode;
}