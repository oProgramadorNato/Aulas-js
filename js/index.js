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
    alert('Adicionou um evento de click');
    document.body.style.background = "yellow";
}

function eventodblClick(){
    alert('Adicionou um evento de click');
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
    alert('mudou')
}
function teclaPressionada(){
        let input = document.getElementById("campoTexto").value;
        console.log(input);

}