class Graph {

  constructor() {
    this.nodes = [];
    this.edges = {};
    this.memoization = [];
    this.next = [];
    this.start = 'A';
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

  showSolution(){
    console.log('Custo total: ', this.memoization[this.nodes.length - 1][this.start]);

    var sucessor = this.next[this.nodes.length - 1][this.start];
    var path = `${this.start}`;
    while(sucessor !== null){
      path += ` -> ${sucessor}`;
      sucessor = this.next[this.nodes.length - 1][sucessor];
    }

    console.log(path);
  }

  showAllSolutions(){
    this.nodes.forEach(node => {
      console.log('Custo total: ', this.memoization[this.nodes.length - 1][node]);

      var sucessor = this.next[this.nodes.length - 1][node];
      var path = `${node}`;
      while(sucessor !== null){
        path += ` -> ${sucessor}`;
        sucessor = this.next[this.nodes.length - 1][sucessor];
      }

      console.log(path);
    });
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

const allNodes = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'W', 'X', 'Y', 
  'Z', 'AA', 'AB', 'AC', 'AD', 
  'AE', 'AF', 'AG', 'AH', 'AI', 
  'AJ', 'AK', 'AL', 'AM', 'AN', 
  'AO', 'AP', 'AQ', 'AR', 'AS', 
  'AT', 'AU', 'AV', 'AW', 'AX', 
  'AY', 'AZ', 'BA', 'BB', 'BC', 
  'BD', 'BE', 'BF', 'BG', 'BH', 
  'BI', 'BJ', 'BK', 'BL', 'BM', 
  'BN', 'BO', 'BP', 'BQ', 'BR', 
  'BS', 'BT', 'BU', 'BV', 'BW'];

console.log('GRAPH:')
newGraph.displayGraph();

newGraph.initialize();
newGraph.solution();

//console.log('MEMOIZATION:');
//console.log(newGraph.memoization);

// console.log('SUCESSOR:');
// console.log(newGraph.next);

// console.log('SOLUTION:');
// newGraph.showSolution();

// console.log(`\n`)

// console.log('ALL SOLUTIONS:');
// newGraph.showAllSolutions();
