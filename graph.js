class Graph {

  constructor() {
    this.nodes = [];
    this.edges = {};
    this.memoization = [];
    this.next = [];
    this.target = 'D';
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addWeightedEdge(node1, node2, weight){
    this.edges[node1].push({node: node2, weight: weight});
  }

  // initialize matrix
  initialize() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.memoization[i] = [];
      this.next[i] = [];
      for (let j = 0; j < this.nodes.length; j++) {
        this.memoization[i][this.nodes[j]] = Infinity;
        this.next[i][this.nodes[j]] = null;

      }
    }
    for(let i = 0; i < this.nodes.length; i++){
      this.memoization[i][this.target] = 0;
    }
  }

  solution() {
    for(let i = 1; i <= this.nodes.length - 1; i++){
      this.nodes.forEach(currentNode => {
        // this.memoization[i][node] = this.memoization[i][node - 1];
        this.edges[currentNode].forEach(({node, weight}) => {
          if (this.memoization[i][currentNode] > this.memoization[i - 1][node] + weight){
            this.memoization[i][currentNode] = this.memoization[i - 1][node] + weight;
            this.next[i][currentNode] = node;
          }
        })
      });
    }
  }

  displayGraph(){
    let graph = '';
    this.nodes.forEach(node => {
      graph += node + ' -> ' + this.edges[node].map(i => (`[${i.node}, ${i.weight}]`))
      graph += '\n';
    });

    console.log(graph);
  }

}

let newGraph = new Graph();

newGraph.addNode('A');
newGraph.addNode('B');
newGraph.addNode('C');
newGraph.addNode('D');
newGraph.addNode('E');

newGraph.addWeightedEdge('A', 'B', -1);
newGraph.addWeightedEdge('A', 'C', 4);
newGraph.addWeightedEdge('B', 'C', 3);
newGraph.addWeightedEdge('B', 'E', 2);
newGraph.addWeightedEdge('B', 'D', 2);
newGraph.addWeightedEdge('E', 'D', -3);
newGraph.addWeightedEdge('D', 'B', 1);
newGraph.addWeightedEdge('D', 'C', 5);

console.log('GRAPH:')
newGraph.displayGraph();

newGraph.initialize();
newGraph.solution();

console.log('MEMOIZATION:');
console.log(newGraph.memoization);

console.log('SUCESSOR:');
console.log(newGraph.next);