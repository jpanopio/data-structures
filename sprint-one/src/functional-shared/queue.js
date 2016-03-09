var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.storageSize = 0;
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function (to, from) {
  _.each(from, function (value, key) {
    to[key] = value;
  });
};

var queueMethods = {};

queueMethods.size = function () {
  return this.storageSize;
};

queueMethods.enqueue = function (value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

queueMethods.dequeue = function () {
  var dequeued = this.storage[0];
  delete this.storage[0];
  for (var prop in this.storage) {
    this.storage[prop - 1] = this.storage[prop];
    delete this.storage[prop];
  }
  this.storageSize === 0 ? this.storageSize : this.storageSize--;
  return dequeued;
};
