/**
 * Structure for representing Undirected graph as adjacency list
 */

var UndirectedGraph = function(V){
    //nodes
    this.V = V;

    //adjacencies
    this.adj = [];
    for (var v = 0 ; v < V ; v++){
        this.adj[v] = [];
    }
};

/**
 * since graph is undirected, adding adjucency for all nodes
 */
UndirectedGraph.prototype.addEdge = function(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
};

UndirectedGraph.prototype.getAdj = function(v){
    return this.adj[v];
};

UndirectedGraph.prototype.getVectors = function(){
    return this.V;

};

module.exports.UndirectedGraph = UndirectedGraph;