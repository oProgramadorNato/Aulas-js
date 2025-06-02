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
console.log(pessoa);

/*
SWITCH
é usado para realizar diferentes ações com base em difertentes
 condições no mesmo bloco de verificação.Caso a condição não seja
  compativel não será executada e o valor padrão será acionado
*/

function verificaCor(){
    let cor = document.getElementById("cor").value;
//Para evitar erros, deixar todas as letras digitadas em minusculo para o codigo entender
    cor = cor.toLowerCase();


//Exemplo
switch (cor) {
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        document.body.style.backgroundColor = "red";
        break;
    case "rosa":
        document.body.style.backgroundColor = "pink";
        break;    

    default:
        document.getElementById("oito").innerHTML = "Não temos essa cor: " + cor ;
        
    
    }
}

//Fazer switch com datas
function diadasemana(){
    var dia = new Date().getDay();//Retorna o dia da semana  do usuario

    switch(dia){
        case 0:
            document.getElementById("nove").innerHTML = " Hoje  é domingo";
            break;
        case 1:
            document.getElementById("nove").innerHTML = " Hoje  é terça";
            break;
        case 2:
            document.getElementById("nove").innerHTML = " Hoje  é quarta";
            break;
        case 3:
            document.getElementById("nove").innerHTML = " Hoje  é quinta";
            break;
        case 4:
            document.getElementById("nove").innerHTML = " Hoje  é sexta";
            break;
        case 5:
            document.getElementById("nove").innerHTML = " Hoje  é sabado";
            break;
        case 6:
            document.getElementById("nove").innerHTML = " Hoje  é segunda";
            break;
            default:
                document.getElementById("nove").innerHTML = "Não sei que dia é... " + dia;
    }
}

/*
Laço de repetição e for
É uma maneira rápida e fácil e rapido de executar uma ação repetidas vezes
*/
//for(*ponto inicial* *condição* *resultado da condição*)
for (let i = 0; i<101; i++){
    document.getElementById("for").innerHTML += i + ", "
}
    /*Transcrição do código
    for (let i = 0; i<10001; i++)
        "i" é igual a zero, começa no zero.
        Enquanto "i" for menor que 101
        ele vai adicionar um número (i++)

    document.getElementById("for").innerHTML += i + br
        caso fosse apenas "=" ele só adicionaria o ultimo número, colocamos "+=" para ele sempre ir acrescentando   
*/
for (let i = 2026; i > 1990; i--){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>"
}
/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. 
Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milisegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar!";
    //ATIVA A FUNÇÃO APENAS UMA VEZ APOS O TEMPO DETERMINADO
    setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
     }, 5000);
}
function pararContagem(){
    clearTimeout("tempo");
    document.getElementById("tempo").innerHTML = "Parou na hora!";
    }

temporizador = setInterval (function (){
    var cronometro = document.getElementById("temporizador").innerHTML;
    var soma = parseInt(cronometro) + 1;//parseInt para transformar caracter em int
    document.getElementById("temporizador").innerHTML = soma;
}, 1000);

function Cronometro(){
    clearInterval(temporizador);
    }

/*
CLASSES EM JAVASCRIPT

Basicamente, as classes são como "fábricas" para criar objetos
Assim como uma fábrica da vida real precisa das máquinas para construir os objetos,
as Classes no JavaScript usa um método chamado constructor() para fabricar os objetos
(só pra relembrar)
const carro = {//objeto e as propriedades
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

 */

class Carro{//a "fabrica" de carros
    constructor(valor1,valor2,valor3){// a "maquina" que vai construir os carros
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

const uno = new Carro("Fiat","Uno",2001);
console.log(uno);
const gol = new Carro("Volkswagem","Caxumba",2020);
console.log(gol);


/**
 MANIPULAR DATAS COM JAVASCRIPT
 */

 //Pegar a data atual
let data = new Date();//comando basico para pegar a data
console.log(data);

//Pegar o ano
let ano = data.getFullYear();
console.log(ano);

//Pegar o mes
let mes = data.getMonth();
console.log(mes);

//Pegar o dia do mes 1 - 31
let dia = data.getDate();
console.log(dia)

//Pegar o dia da semana
let semana = data.getDay();
console.log(semana)

//Pegar a hora
let hora = data.getHours();
console.log(hora)

//Pegar minutos
let minutos = data.getMinutes();
console.log(minutos);

//Pegar segundos
let segundos = data.getSeconds();
console.log(segundos)

//Pegar milissegundos
let milisegundos = data.getMilliseconds();
console.log(milisegundos)

//Pegar data no padrão Brasil
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR)


/*
JSON

JSON significa Javascript Object Notation que traduzido pro portugues fica algo como "Notação de objeto JS"

Explicando de um modo simples, JSON é basicamnete uma forma de converter um objeto
em texto e vice-versa

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, ja que
o formato de texto é lido por praticamente toda linguagem de programação.
 
Para trabalhar com JSON no JS usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrao JSON

*/
//OBJETO CARRO
const carrao = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
//TRANSFORMOU OBJETO EM TEXTO
let texto = JSON.stringify(carrao);//transformar um objeto em texto(String)

//COLOCOU TEXTO NO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEU TEXTO EM OBJETO 
let obj = JSON.parse(texto);

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.modelo);

//EXEMPLO REAL

//FAZER UMA SOLICITAÇÃO NO SITE "VIACEP" UMA API DE ENDEREÇO
const ajax = new XMLHttpRequest();//Metodo pra fazer uma requisição a um site sem ter que acessa-lo diretamente
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');//Pegar o link do site
ajax.send();

ajax.onload = function(){
    document.getElementById('idem').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    console.log(obj.ddd);
}

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();//Metodo pra fazer uma requisição a um site sem ter que acessa-lo diretamente
    ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');//Pegar o link do site
    ajax.send();

    ajax.onload = function(){
        document.getElementById('denovo').innerHTML = this.responseText;
    }
}
