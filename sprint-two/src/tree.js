var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  extend(treeMethods, newTree);

  return newTree;
};

var extend = function (from, to) {
  _.each(from, function (value, key) {
    to[key] = value;
  });
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target, currentNode) {
  var checkNode = currentNode || this;
  if (checkNode.value === target) {
    return true;
  }
  if (checkNode.children.length === 0) {
    return false;
  } else {
    for (var i = 0; i < checkNode.children.length; i++) {
      if (checkNode.contains(target, checkNode.children[i])) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
