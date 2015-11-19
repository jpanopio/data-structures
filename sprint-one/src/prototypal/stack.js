var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};

  return newStack;
};

stackMethods = {};

stackMethods.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
};

stackMethods.push = function(value){
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

stackMethods.pop = function(value){
  var popped = this.storage[this.stackSize];
  this.stackSize--;
  return popped;
};


