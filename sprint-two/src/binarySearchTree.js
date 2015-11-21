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

  // Change to ternary operators later
  if(value < rootValue) {
    if(this.left === undefined) {
      this.left = newBSTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === undefined) {
      this.right = newBSTree;
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(){};

bstMethods.depthFirstLog = function(){};
/*
 * Complexity: What is the time complexity of the above functions?
 */
