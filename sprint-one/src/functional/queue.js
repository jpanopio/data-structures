var Queue = function() {
  var someInstance = {};
  var storage = {};
  var storageSize = 0;

  someInstance.enqueue = function (value) {
    storage[storageSize++] = value;
  };

  someInstance.dequeue = function () {
    var dequeued = storage[0];
    delete storage[0];
    _.each(storage, function (item, index) {
      storage[index - 1] = item;
      delete storage[index];
    });
    storageSize === 0 ? storageSize : storageSize--;
    return dequeued;
  };

  someInstance.size = function () {
    return storageSize;
  };

  return someInstance;
};
