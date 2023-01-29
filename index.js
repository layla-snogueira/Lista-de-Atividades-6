///Questão 1
let contador = 0;
let somaIdades = 0;
let numAlunos = 0;

while (contador === 0) {
    let idade = Number(prompt('Digite aqui sua idade:'))
    if(idade != 999){
        somaIdades = idade + somaIdades
        numAlunos++
    }else{
        contador++
    } 
}
console.log(`A média de idade dos ${numAlunos} alunos é: ${somaIdades/numAlunos}.`)

//Questão 2

let salarioM = 0;
let salarioF = 0;
let totalSalarioM = 0;
let totalSalarioF = 0;
let sexo;
let confirmacao = true;
let fem = 0;
let masc = 0;

for (i = 0; confirmacao; i++) {
    
    if (confirmacao) {
        sexo = prompt('Qual o Gênero do funcionario? (Digite M para masculino e F para feminino)')

        if (sexo === 'm' || sexo === 'M') {
            salarioM = Number(prompt('Qual o valor do salário recebido por este funcionário?'));
            totalSalarioM = totalSalarioM + salarioM;
            masc++
        }

        if( sexo === 'f' || sexo === 'F') {
            salarioF = Number(prompt('Qual o valor do salário recebido por este funcionário?'));
            totalSalarioF = totalSalarioF + salarioF
            fem++
        }
    }
    if (i >=1) {

        confirmacao = confirm('Deseja continuar?')
    }

    if (confirmacao === false) {
        alert('Resultado disponivel no console.log!')
    }

}

console.log(`Foram pagos ${fem} salarios à funcionarias do gênero feminino.`);
console.log(`Foram pagos ${masc} salarios à funcionarios do gênero masculino`);
console.log (`O total pago aos funcionarios do gênero feminino é de: ${totalSalarioF}`)
console.log (`O total pago aos funcionarios do gênero masculino é de: ${totalSalarioM}`)
console.log (`A media salarial das funcionarias do gênero feminino é de: ${totalSalarioF.toFixed(4) / fem}`)
console.log (`A media salarial dos funcionarios do gênero masculino é de: ${totalSalarioM.toFixed(4) / masc}`)

//Questão 3
let num1 = Number(prompt('Digite o que você deseja que incie a contagem:'));
let num2 = Number(prompt('Digite o último valor da contagem:'));;
let incremento = Number(prompt('Digite o incremento:'));;
let num = 0;

for(i = num1 ; numero <= num2 ; i + incremento) {
    if (num != 0) {
        console.log(num)}
    num = i += incremento
 
}


//Questão 4//let nomeCliente;
let generocliente;
let valorcompra = 0;
let conf = true;
let valordesc = 0;
let nomecliente;

for (i = 0; conf; i++) {

    if (conf) {

    nomecliente = prompt('Qual o nome do cliente?:');
    generocliente = prompt('Qual o gênero do cliente? (F para feminino e M para masculino.)');
    valorcompra = Number(prompt('Qual o valor total das compras?'));

            if (valorcompra === 0) {
                conf = false;
            }

        if (generocliente === 'm' || generocliente === 'M') {
            console.log(`Nome do Cliente: ${nomecliente}`)
            console.log('O cliente é homem!')
            console.log(`Valor da compra: ${valorcompra}`);
          nsole.log(`Valor com D  valordesc = (valorcompra / 100) * 95;
            coesconto: ${valordesc.toFixed(2)}`);
        }

        if (generocliente === 'f' || generocliente === 'F') {
            console.log(`Nome do Cliente: ${nomecliente}`)
            console.log('O cliente é mulher!')
            console.log(`Valor da compra: ${valorcompra}`);
            valordesc = (valorcompra / 100) * 87;
            console.log(`Valor com Desconto: ${valordesc.toFixed(2)}`);
        }
    }

        
    conf = confirm('Deseja adicionar mais clientes?')

    if (conf === false) {
        console.log(`O Total de clientes foi de:${i + 1} `)
    }
}

//Questão 5//

let distancia = Number(prompt('Qual a distância que você deseja percorrer em KM?'))
let valorcorrida = 0

for (i=0; i<=distancia; i++){
    if(distancia <= 200){
        valorcorrida = distancia * 0.50
        console.log(`O valor à pagar pela corrida de ${distancia} km é de ${valorcorrida}`)
    }else{
        valorcorrida = distancia * 0.45
        console.log(`O valor à pagar pela corrida de ${distancia} km é de ${valorcorrida}`)
    }
}

// Questão 6
let altura = Number(prompt('informe a altura do terreno em m²:'));
let largura = Number(prompt('Indorme a largura do terreno em m²:'));
let area = altura * largura

if(area < 100){
console.log(`Este terrno tem ${area}m² de área e se enquadra na categoria TERRENO POPULAR.`)
}else if(area >= 100 && area <= 500){
    console.log(`Este terrno tem ${area}m² de área e se enquadra na categoria TERRENO MASTER.`)
}else{
    console.log(`Este terrno tem ${area}m² de área e se enquadra na categoria TERRENO VIP.`)
}

