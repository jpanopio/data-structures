var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.queueSize = 0;

  extend(storage, queueMethods);

  return storage;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function(){
  return this.queueSize >= 0 ? this.queueSize : 0;
};

queueMethods.enqueue = function(value){
  this.queueSize++;
  this[this.queueSize] = value;
};

queueMethods.dequeue = function(){
  var dequeued = this[this.queueSize];
  for(var key in this){
    this[key] = this[Number(key)+1];
  }
  delete this[this.queueSize];
  this.queueSize--;
  return dequeued;
};
