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
  if(this.value === target){
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      return this.children[i].contains(target);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
