var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;

  return newStack;
};

stackMethods = {};

stackMethods.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
};


