var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.storageSize = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.storageSize;
};

queueMethods.enqueue = function (value) {
  this.storageSize++;
  this.storage[this.size()] = value;
};

queueMethods.dequeue = function () {
  dequeued = this.storage[1];
  delete this.storage[1];
  this.storageSize === 0 ? this.storageSize : this.storageSize--;
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }

  return dequeued;
};
