var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.size = function(){
  return this.stackSize >= 0 ? this.stackSize : 0;
}

Stack.prototype.push = function(value){
  this.stackSize++;
  this.storage[this.stackSize] = value;
}

Stack.prototype.pop = function(){
  var popped = this.storage[this.stackSize];
  this.stackSize--;
  return popped;
}
