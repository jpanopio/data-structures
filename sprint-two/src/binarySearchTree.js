var BinarySearchTree = function(value) {
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value){
  var newBSTree = BinarySearchTree(value);
  var rootValue = this.value;

  if(value < rootValue) {
    this.left === undefined ? this.left = newBSTree : this.left.insert(value);
  } else {
    this.right === undefined ? this.right = newBSTree : this.right.insert(value);
  }
};

bstMethods.contains = function(value){
  var current = this.value;
  if(current === value) {
    return true;
  } else {
    if(value < current) {
      if(this.left !== undefined) {
        return this.left.contains(value);
      }
    } else {
      if(this.right !== undefined) {
        return this.right.contains(value);
      }
    }
  }
  return false;
};

bstMethods.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if(this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }

  return;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
