var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.queueSize = 0;

  extend(queue, queueMethods);

  return queue;
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
  this.storage[this.queueSize] = value;
};

queueMethods.dequeue = function(){
  var dequeued = this.storage[1];
  for(var key in this.storage){
    this.storage[key] = this.storage[Number(key)+1];
  }
  delete this.storage[this.queueSize];
  this.queueSize--;
  return dequeued;
};
