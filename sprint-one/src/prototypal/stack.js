var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.storageSize = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.storageSize;
};

stackMethods.push = function (value) {
  this.storageSize++;
  this.storage[this.size()] = value;
};

stackMethods.pop = function () {
  var popped = this.storage[this.size()];
  delete this.storage[this.size()];
  this.storageSize === 0 ? this.storageSize : this.storageSize--;

  return popped;
};
