var Stack = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.pop = function() {
    var popped = storage[stackSize];
    storage[stackSize] = undefined;
    stackSize--;
    return popped;
  };

  someInstance.size = function() {
    return stackSize > 0 ? stackSize : 0;
  };

  return someInstance;
};
