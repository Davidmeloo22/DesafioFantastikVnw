// VARIÁREIS
// A poposta da variável é guardar uma informação em nosso código.


// var - sintaxe (Forma de escrita)
// var nomeDoUsuario = "augusto";      (Não se utiliza mais VAR.)

// let 

let pratoDoDia = "Filé mignon com batata frita";

pratoDoDia = "pizza";

let saldo = 1000;



// const
//  COnst é uma caixa que não é modificável.
let cpf = "000000000000";

const cor = "tomato";
let cpf2 ="1111111111111";

//  Number -> São todos os tipos de dados números (Números inteiros ou com pontos). (js NÂO aceita ponto (.) para separar os números)

// String -> São tipos de dados de texto.

// Boolean ->  São dados que são baseados em true ou/e false (Verdadeiro e falso).  

// Debugar o código é conferir se o código estar tudo certo.



// Metodos do Js. Métodos como uma função nativa da linguagem, que ajudam a  gente na hora de criamos a nossa lógica.


// Operadores de comparação
// > Maior que
// < Menor que
// >= Maior ou igual que
// <= Menor ou igual que

//  Condições -> São basicamente ações que vão acontecer, baseada na informação que o usuário retornar pra gente.

// Condicional simples



console.log(pratoDoDia);
console.log(cpf);

console.log(cor);

console.log('Seu CPf é '+cpf + 'Porém atualizou para ' + cpf2);

// Se saldo for maior que 10000000, imprima "Não da pra comprar a carne" 
// SeNão imprima "Da pra comprar a carne"

if (saldo < 101) {
    console.log("Não da pra comprar a carne")
    }
    else {
        console.log("Da pra comprar carne")
    }

    console.log("Meu cpf é " + cpf + "e minha comida favorita é " + pratoDoDia)

    console.log(`Minha cpf é ${cpf} e meu prato  favorito é ${pratoDoDia}`)


// > VAI VERIFICAR SE UM VALOR É MAIOR QUE O OUTRO

// < VAI VERIFICAR SE UM VALOR E MENOR QUE O OUTRO

// >= MAIOR OU IGUAL, VERIFICAR SE UM VALOR É MAIOR OU IGUAL AO OUTRO

// <= MENOR OU IGUAL, VERIFICAR UM VALOR É MENOR OU IGUAL AO OUTRO

// == IGUAL A, ELE VAI VERIFICAR SE UM VALOR É IGUAL AO OUTRO

// === ESTRITAMENTE IGUAL, VAI VERIFICAR O VALOR E TIPO SE SÃO IGUAIS

// != DIFERENTE DE, VAI VERIFICAR SE OS VALORES SÃO DIFERENTES

// !== ESTRITAMENTE DESIGUAL, VAI VERIFICAR SE O VALOR E TI

let complemento = "salada";

if (complemento == "salada") {
console.log ("Oxe, to dboa");
}

let comidDeHoje = "mcarrão" ;

if (comidaDeHoje != "salada") {
console.log ("vish");
}

let media = 12;

if (media >=12) {
console.log("aprovado");
}



