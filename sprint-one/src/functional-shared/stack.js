var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.stackSize = 0;

  extend(storage, stackMethods);

  return storage;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
};

stackMethods.push = function(value){
  this.stackSize++;
  this[this.stackSize] = value;
};

stackMethods.pop = function(){
  var popped = this[this.stackSize];
  this.stackSize--;
  return popped;
};

