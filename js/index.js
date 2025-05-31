//imprimir texto usando script
document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS</b>!";
//imprimir texto dentro do console
console.log("Oi isso é um console.log");


//formas de sintaxes -> var, const, e let
/*
-> var
Pode ser reatribuída e redeclara múltiplas vezes no mesmo escopo.
Tem escopo de função, o que pode causar comportamentos inesperados.
Exemplo:
        var a = 1;
        var a = 2;
        FUNCIONA SEM ERRO

-> let
Pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
Tem escopo de bloco, o que o torna mais seguro que var.

Exemplo:
        let idade = 30;
        let idade = 40; 
        ESSA SITUAÇÃO OCASIONA EM ERRO POIS 'idade' JÁ FOI DECLARADA

-> const
Não pode ser reatribuída nem redeclarada.
Também tem escopo de bloco.
Pode-se alterar propriedades internas de objetos, mas não trocar a referência.

Exemplo:
        const idade = 25;
        idade = 30; 
        OCASIONA EM ERRO POIS NÃO É POSSIVEL REATRIBUIR UMA CONSTANTE
*/

//Objetos

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2025,
    placa: "ABC-1234",
    buzina: function (){ alert('Biiiiiiiiiii')},
        completo: function (){
            return "A marca desse carro é: " + this.marca + "E o modelo do carro é: " + this.modelo
        }
    };
console.log (carro.completo());






//Eventos
/*
| Evento JS/HTML | Significado                                      |
| -------------- | ------------------------------------------------ |
| `onclick`      | Clique simples com o mouse                       |
| `ondblclick`   | Clique duplo com o mouse                         |
| `onmouseover`  | Cursor entra sobre um elemento                   |
| `onmouseout`   | Cursor sai de um elemento                        |
| `onmousedown`  | Botão do mouse pressionado                       |
| `onmouseup`    | Botão do mouse solto                             |
| `onmousemove`  | Movimento do mouse sobre um elemento             |
| `onkeydown`    | Tecla pressionada (qualquer tecla)               |
| `onkeyup`      | Tecla solta após ser pressionada                 |
| `onkeypress`   | Tecla digitada (gera caractere)                  |
| `onfocus`      | Elemento recebe foco (ex: cursor em campo texto) |
| `onblur`       | Elemento perde o foco                            |
| `onchange`     | Valor de um campo foi alterado                   |
| `onsubmit`     | Formulário foi enviado                           |
*/

function eventoClick(){
    console.log('Adicionou um evento de click');
    document.body.style.background = "yellow";
}

function eventodblClick(){
    console.log('Adicionou um evento de click');
    document.body.style.background = "blue";
}

function viraVermelho(){
    let div = document.getElementById("test")
    div.style.backgroundColor = "red";
}
function viraCinza(){
    let div = document.getElementById("test")
    div.style.backgroundColor = "grey";
}
function limpaTexto(){
    document.getElementById("campoTexto").value = ""
}
function mudou(){
    console.log('mudou')
}
function teclaPressionada(){
        let input = document.getElementById("campoTexto").value;
        console.log(input);

}





/* ARRAYS

Arrays em JavaScript são usados para armazenar vários valores em uma única variável. 

Diferente dos objetos, que usam propriedades (ou "nomes") para identificar seus valores, os arrays utilizam índices (ou posições numéricas) para acessar seus elementos. 

Pense em um array como uma lista de itens organizados em uma ordem específica, onde cada item pode ser acessado por sua posição na lista.

Exemplo:
const lista = ["arroz", "feijão", "macarrão", "leite"];

lista[0] // acessa o valor "arroz" (posição 0)
lista[1] // acessa o valor "feijão" (posição 1)

E assim por diante.
*/

const lista = ["arroz", "feijao", "macarrao", "leite"];
let x = lista[3];
//alert(x);
console.log(lista)

/*Diferença entre Array e Objeto
ARRAY: Presença de '[]', sem necessidade de especificar
const pessoa = ['Dimitri', 'Silva', 30]

OBJETO:  Presença de '{}', necessidade de especificar
const pessoa= {
    nome: "Dimitri";
    sobrenome: "Silva";
    idade: 30;}
*/

const pessoa = ['Dimitri', 'Silva', 30, 'professor']

//Descobrir o primeiro item da matriz
console.log("Primeiro item da matriz: " + pessoa[0])

//descobrir quantos itens tem na matriz
console.log("Quantos itens tem na matriz: " + pessoa.length); //3

//adicionar um item na matriz
pessoa.push("Brasileiro");
pessoa[pessoa.length] = "Casado";

//descobrir o ultimo item da matriz
console.log("Descobrir o ultimo item da matriz: " + pessoa[pessoa.length -1]);


//Mostrar as matrizes na tela
document.getElementById('texto').innerHTML =  pessoa.join("  ");
//Adicionar espaço entre os textos
pessoa.join("  ");


/*
| Método       | Descrição                                                   |
| ------------ | ----------------------------------------------------------- |
| `push()`     | Adiciona elemento ao final do array                         |
| `pop()`      | Remove o último elemento                                    |
| `shift()`    | Remove o primeiro elemento                                  |
| `unshift()`  | Adiciona elemento no início                                 |
| `splice()`   | Adiciona, remove ou substitui elementos                     |
| `slice()`    | Retorna uma parte do array (não altera o original)          |
| `concat()`   | Junta dois ou mais arrays                                   |
| `indexOf()`  | Retorna o índice do elemento (ou -1 se não existir)         |
| `includes()` | Verifica se o array contém determinado valor                |
| `forEach()`  | Executa uma função para cada item do array                  |
| `map()`      | Cria um novo array com os resultados de uma função aplicada |
| `filter()`   | Cria um novo array com os elementos que passam no teste     |
| `reduce()`   | Reduz o array a um único valor                              |
| `find()`     | Retorna o primeiro elemento que satisfaz a condição         |
| `sort()`     | Ordena o array (por padrão em ordem alfabética)             |
| `reverse()`  | Inverte a ordem dos elementos                               |
| `join()`     | Junta todos os elementos em uma string                      |
| `flat()`     | Achata arrays aninhados em um único nível                   |
*/


//Remove o ultimo item
pessoa.pop();
//Adiciona um item ao final
pessoa.push("Qualquer coisa");
//remove o primeiro elemento da matriz
pessoa.shift();
//transforma um elemento no primeiro elemento da matriz
pessoa.unshift("Efeito unshift");
//A primeira variavel decide quantos itens serão apagados e a segunda quantos serão adicionados
pessoa.splice(0, 1, "Splice 1, Splice 2")


//concatena/ merge/ junta uma lista a outra
const lista1 = ["Arroz", "Feijao", "Batata", "Macarrao"];
const lista2 = ["Banana", "linguiça", "salada"];
const lista3 = ["Salgadinho"]

const superlista = lista1.concat(lista2,lista3);

//Reparte a matriz a partir do numero escolhido
const jogadores = [
    "Romeirão", 
    "Zé", 
    "Pelé", 
    "Cr7", 
    "Messi", 
    "Ronaldinho"
];
const craques = jogadores.slice(2,6);

//Deixar a lista em ordem alfabetica
jogadores.sort();
//Para deixar a lista em ordem alfabetica reversa
//Primeiro deixar ela em "sort" para ordena-las, e então:
jogadores.reverse();

//Para deixar a matriz em ordem numerica crescente (tem um sentido, eu só não sei qual)
const numeros = [5,10,15,2,1,29,40];

numeros.sort (function (a,b) {return a-b});

//Para deixar a matriz em ordem numerica decrescente (tem um sentido, eu só não sei qual)
numeros.sort (function (a,b) {return b-a});

const numbers = [5,10,15,500,1,40,];

//Para pegar o maior número da matriz
function maiorNumero(array){
    return Math.max.apply(null, array);
}
//Para pegar o menor número da matriz
function menorNumero(array){
    return Math.min.apply(null, array);
}

//Para filtrar seja la o que voce precisa
const maior20 = numbers.filter(filtragem);

function filtragem (value, index, array){
    return value>20;
}

//Mostrar itens na tela & console
document.getElementById('teste').innerHTML =  maior20;
console.log(pessoa);//teste