var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function () {
    var removedHead = list.head;
    list.head = null;
    list.head = removedHead.next;

    return removedHead.value;
  };

  list.contains = function (target, currentNode) {
    var checkNode = currentNode || list.head;
    if (checkNode.value === target) {
      return true;
    }
    if (checkNode.next === null) {
      return false;
    }
    return list.contains(target, checkNode.next)
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
