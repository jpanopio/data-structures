var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;
};

Queue.prototype.size = function(){
  return this.queueSize >= 0 ? this.queueSize : 0;
}

Queue.prototype.enqueue = function(value){
  this.queueSize++;
  this.storage[this.queueSize] = value;
}

Queue.prototype.dequeue = function(){
  var dequeued = this.storage[1];
  for(var key in this.storage){
    this.storage[key] = this.storage[Number(key)+1];
  }
  delete this.storage[this.queueSize];
  this.queueSize--;
  return dequeued;
}
