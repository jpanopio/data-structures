var Queue = function() {
  this.storage = {};
  this.storageSize = 0;
};

Queue.prototype.size = function () {
  return this.storageSize;
};

Queue.prototype.enqueue = function (value) {
  this.storageSize++;
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function () {
  var dequeued = this.storage[1];
  delete this.storage[1];
  this.storageSize === 0 ? this.storageSize : this.storageSize--;
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }

  return dequeued;
};
