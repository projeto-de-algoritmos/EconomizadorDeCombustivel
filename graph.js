class Graph {

  constructor() {
    this.nodes = [];
    this.edges = {};
    this.memoization = [];
    this.next = [];
    this.start = 'A';
    this.target = 'BW';
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
  'BS', 'BT', 'BU', 'BV', 'BW'
];

// Adiciona os nós ao grafo
allNodes.forEach(node => {
  newGraph.addNode(node);
});

//Adiciona as arestas direcionadas e com peso ao grafo
newGraph.addWeightedEdge('A', 'B', -2);
newGraph.addWeightedEdge('A', 'C', 1);
newGraph.addWeightedEdge('A', 'D', 4);
newGraph.addWeightedEdge('B', 'F', 1);
newGraph.addWeightedEdge('C', 'E', 1);
newGraph.addWeightedEdge('C', 'G', -2);
newGraph.addWeightedEdge('D', 'C', 1);
newGraph.addWeightedEdge('D', 'H', -2);
newGraph.addWeightedEdge('D', 'J', 1);
newGraph.addWeightedEdge('D', 'I', 4);
newGraph.addWeightedEdge('E', 'F', -2);
newGraph.addWeightedEdge('E', 'M', 1);
newGraph.addWeightedEdge('E', 'G', 4);
newGraph.addWeightedEdge('F', 'N', 1);
newGraph.addWeightedEdge('G', 'M', 4);
newGraph.addWeightedEdge('G', 'L', 1);
newGraph.addWeightedEdge('H', 'G', 1);
newGraph.addWeightedEdge('I', 'J', -2);
newGraph.addWeightedEdge('I', 'Y', 1);
newGraph.addWeightedEdge('J', 'K', 4);
newGraph.addWeightedEdge('J', 'W', 1);
newGraph.addWeightedEdge('J', 'X', -2);
newGraph.addWeightedEdge('K', 'G', -2);
newGraph.addWeightedEdge('K', 'V', -2);
newGraph.addWeightedEdge('L', 'V', 1);
newGraph.addWeightedEdge('L', 'U', 4);
newGraph.addWeightedEdge('M', 'Q', 1);
newGraph.addWeightedEdge('N', 'R', 4);
newGraph.addWeightedEdge('N', 'O', 4);
newGraph.addWeightedEdge('N', 'M', 1);
newGraph.addWeightedEdge('O', 'P', 4);
newGraph.addWeightedEdge('O', 'T', 1);
newGraph.addWeightedEdge('O', 'Q', 1);
newGraph.addWeightedEdge('P', 'S', 4);
newGraph.addWeightedEdge('P', 'T', 4);
newGraph.addWeightedEdge('Q', 'AR', 1);
newGraph.addWeightedEdge('R', 'S', 1);
newGraph.addWeightedEdge('S', 'AU', 1);
newGraph.addWeightedEdge('S', 'AS', -2);
newGraph.addWeightedEdge('T', 'AR', -2);
newGraph.addWeightedEdge('U', 'AF', 4);
newGraph.addWeightedEdge('U', 'AE', 4);
newGraph.addWeightedEdge('V', 'U', -2);
newGraph.addWeightedEdge('W', 'Q', 1);
newGraph.addWeightedEdge('W', 'Z', -2);
newGraph.addWeightedEdge('X', 'Z', 4);
newGraph.addWeightedEdge('X', 'AA', 4);
newGraph.addWeightedEdge('X', 'AC', 4);
newGraph.addWeightedEdge('X', 'AB', 1);
newGraph.addWeightedEdge('Z', 'V', 4);
newGraph.addWeightedEdge('Z', 'AD', -2);
newGraph.addWeightedEdge('AA', 'AI', 4);
newGraph.addWeightedEdge('AB', 'AI', 1);
newGraph.addWeightedEdge('AC', 'AJ', 1);
newGraph.addWeightedEdge('AD', 'AE', 1);
newGraph.addWeightedEdge('AD', 'AN', 4);
newGraph.addWeightedEdge('AD', 'AH', 1);
newGraph.addWeightedEdge('AE', 'AR', 1);
newGraph.addWeightedEdge('AE', 'AP', 1);
newGraph.addWeightedEdge('AE', 'AG', -2);
newGraph.addWeightedEdge('AF', 'AP', 1);
newGraph.addWeightedEdge('AG', 'AO', 1);
newGraph.addWeightedEdge('AH', 'AM', 4);
newGraph.addWeightedEdge('AH', 'AK', 1);
newGraph.addWeightedEdge('AI', 'AH', -2);
newGraph.addWeightedEdge('AI', 'AL', 1);
newGraph.addWeightedEdge('AI', 'BK', 1);
newGraph.addWeightedEdge('AK', 'AL', -2);
newGraph.addWeightedEdge('AL', 'BJ', 1);
newGraph.addWeightedEdge('AL', 'BK', -2);
newGraph.addWeightedEdge('AM', 'AO', 4);
newGraph.addWeightedEdge('AM', 'BI', 1);
newGraph.addWeightedEdge('AN', 'BF', 1);
newGraph.addWeightedEdge('AO', 'BE', 1);
newGraph.addWeightedEdge('AO', 'BO', -2);
newGraph.addWeightedEdge('AP', 'AN', 1);
newGraph.addWeightedEdge('AQ', 'BA', 1);
newGraph.addWeightedEdge('AQ', 'AY', 4);
newGraph.addWeightedEdge('AQ', 'AO', 1);
newGraph.addWeightedEdge('AR', 'AT', 4);
newGraph.addWeightedEdge('AR', 'AX', 1);
newGraph.addWeightedEdge('AR', 'AQ', -2);
newGraph.addWeightedEdge('AT', 'BA', -2);
newGraph.addWeightedEdge('AU', 'AV', 4);
newGraph.addWeightedEdge('AU', 'AW', 1);
newGraph.addWeightedEdge('AU', 'AT', -2);
newGraph.addWeightedEdge('AV', 'BC', 1);
newGraph.addWeightedEdge('AV', 'AW', 4);
newGraph.addWeightedEdge('AW', 'BB', 1);
newGraph.addWeightedEdge('AX', 'AW', 4);
newGraph.addWeightedEdge('AX', 'BA', 1);
newGraph.addWeightedEdge('AX', 'AZ', -2);
newGraph.addWeightedEdge('AY', 'BP', 1);
newGraph.addWeightedEdge('AZ', 'BH', 4);
newGraph.addWeightedEdge('BA', 'BB', -2);
newGraph.addWeightedEdge('BA', 'BD', 1);
newGraph.addWeightedEdge('BB', 'BR', 1);
newGraph.addWeightedEdge('BB', 'BQ', 4);
newGraph.addWeightedEdge('BC', 'BS', 1);
newGraph.addWeightedEdge('BC', 'BB', 4);
newGraph.addWeightedEdge('BD', 'BQ', 1);
newGraph.addWeightedEdge('BE', 'BD', 4);
newGraph.addWeightedEdge('BE', 'BG', 1);
newGraph.addWeightedEdge('BF', 'BH', 1);
newGraph.addWeightedEdge('BF', 'BI', 1);
newGraph.addWeightedEdge('BG', 'BH', 4);
newGraph.addWeightedEdge('BG', 'BO', -2);
newGraph.addWeightedEdge('BG', 'BV', 1);
newGraph.addWeightedEdge('BH', 'BQ', 4);
newGraph.addWeightedEdge('BH', 'BU', 1);
newGraph.addWeightedEdge('BH', 'BO', 4);
newGraph.addWeightedEdge('BI', 'BG', 1);
newGraph.addWeightedEdge('BI', 'BN', -2);
newGraph.addWeightedEdge('BJ', 'BI', -2);
newGraph.addWeightedEdge('BJ', 'BM', 1);
newGraph.addWeightedEdge('BJ', 'BL', 4);
newGraph.addWeightedEdge('BK', 'BJ', 4);
newGraph.addWeightedEdge('BL', 'BM', -2);
newGraph.addWeightedEdge('BN', 'BW', 4);
newGraph.addWeightedEdge('BO', 'BW', 4);
newGraph.addWeightedEdge('BQ', 'BT', 4);
newGraph.addWeightedEdge('BR', 'BU', -2);
newGraph.addWeightedEdge('BT', 'BU', 4);
newGraph.addWeightedEdge('BU', 'BW', 1);

//Mostra os grafo
// console.log('GRAPH:')
// newGraph.displayGraph();

newGraph.initialize();
newGraph.solution();

console.log('MEMOIZATION:');
console.log(newGraph.memoization);

// console.log('SUCESSOR:');
// console.log(newGraph.next);

// console.log('SOLUTION:');
// newGraph.showSolution();

// console.log(`\n`)

// console.log('ALL SOLUTIONS:');
// newGraph.showAllSolutions();
