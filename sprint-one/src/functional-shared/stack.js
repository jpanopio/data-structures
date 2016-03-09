var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.storageSize = 0;
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function (to, from) {
  _.each(from, function (value, key) {
    to[key] = value;
  });
};

var stackMethods = {};

stackMethods.size = function () {
  return this.storageSize;
};

stackMethods.push = function (value) {
  this.storage[this.size()] = value;
  this.storageSize++;
};

stackMethods.pop = function () {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  this.storageSize === 0 ? this.storageSize : this.storageSize--;
  return popped;
};
