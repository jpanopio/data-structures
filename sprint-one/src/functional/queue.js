var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[queueSize] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[1];
    for(var key in storage){
      var nextKey = Number(key) + 1;
      storage[key] = storage[String(nextKey)];
    }
    storage[queueSize] = undefined;
    queueSize--;
    return dequeued;
  };

  someInstance.size = function() {
    return queueSize >= 0 ? queueSize : 0;
  };

  return someInstance;
};
