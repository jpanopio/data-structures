

// ------------------------
// Instantiate a new graph
var Graph = function () {
  this.storage = {};
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return node in this.storage;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return (String(fromNode) + '-' + String(toNode)) in this.edges;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (fromNode in this.storage && toNode in this.storage) {
    this.edges[String(fromNode) + '-' + String(toNode)] = [fromNode, toNode];
    this.edges[String(toNode) + '-' + String(fromNode)] = [toNode, fromNode];
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this.edges[String(fromNode) + '-' + String(toNode)];
  delete this.edges[String(toNode) + '-' + String(fromNode)];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  _.each(this.storage, function (node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


