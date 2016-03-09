var Stack = function() {
  this.storage = {};
  this.storageSize = 0;
};

Stack.prototype.size = function () {
  return this.storageSize;
};

Stack.prototype.push = function (value) {
  this.storageSize++;
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function () {
  var popped = this.storage[this.size()];
  delete this.storage[this.size()];
  this.storageSize === 0 ? this.storageSize : this.storageSize--;

  return popped;
};
