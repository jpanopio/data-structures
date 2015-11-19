var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for(var prop in from) {
    to[prop] = from[prop];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newTree = new Tree(value);
  this.children.push(newTree);  // fix me
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
