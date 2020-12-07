# EconomizadorDeCombustível

**Conteúdo da Disciplina**: Projeto Final<br>

## Aluno
|Matrícula | Aluno |
| -- | -- |
| 18/0129058  |  Paulo Victor da Silva |

## Sobre 
Já pensou como seria legal se pudesse escolher uma rota, não pelo seu tamanho ou tempo para chegar até o destine, mas pelo seu consumo de combustível? 

Esse projeto vem solucionar isso. Utilizando das tecnologias mais recentes nos satélites nos quais permitem detectar se uma estrada específica é uma subida, plana ou descida, criei essa solução, utilizando o algoritmo de Bellman Ford com o seguinte funcionamento:

As estradas são representadas pelas arestas coloridas e as ligações entre uma estrada e outra pelos nós.

Toda estrada que foi detectada pelo satélite como **subida(vermelha)**, tem um custo de _4_ simbolizando um aumento no consumo de combustível.

As estradas detectadas como **planas(azuis)** possuem um custo de _1_ para simbolizar que consomem o tanto que o veículo realizar de combustível/km percorrido.

Já as estradas detectadas como **descidas(verder)** possuem um custo de _-2_ para simbolizar uma economia no consumo de combustível levando em consideração que o veículo não precisará de tanta potência para percorrer a dita estrada.

**Considerando tudo isso, o algoritmo vai te retornar a melhor combinação de estradas de um ponto a outro economizando o máximo de combustível.**

## Screenshots
<p align="center">
  <img alt="Grafo"  src="https://github.com/twistershark/Final_EconomizadorDeCombustivel/blob/master/assets/grafo.png" />

  <img alt="Solução 1"  src="https://github.com/twistershark/Final_EconomizadorDeCombustivel/blob/master/assets/solucao1.png" />

  <img alt="Solução 2"  src="https://github.com/twistershark/Final_EconomizadorDeCombustivel/blob/master/assets/solucao2.png" />
</p>

## Instalação 
**Linguagem**: JavaScript<br>
É necessário o NodeJS instalado para executar o projeto.<br>

Ou você pode executar o projeto através do CodePen. Basta acessar esse link: [CodePen - Projeto Final](https://codepen.io/twistershark/pen/XWjdGdL)<br>
Após a página carregar, clique em 'Console' na parte inferior esquerda e o resultado do algoritmo será mostrado.

## Uso 

Vídeo de explicação está na pasta assets<br>

Para utilizar, basta executar o projeto. Caso queira trocar o ponto de partida ou destino, você pode realizar isso através das variáveis _'start'_ e _'target'_.



