var Stack = function() {
  var someInstance = {};
  var storage = {};
  var storageSize = 0;

  someInstance.push = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.pop = function() {
    var popped = storage[storageSize - 1];
    delete storage[storageSize - 1];
    storageSize === 0 ? storageSize : storageSize--;
    return popped;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
