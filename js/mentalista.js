/*Esse é um jogo onde o computador sorteia um número, e o usuário tem que adivinhar qual. 
O usuário também deve selecionar o intervalo e o número máximo de tentativas.*/

//Determinando variáveis e constantes
var numeroSorteado, //número que o computador sortear
    tentativa, //número que o usuário tentou
    contagemTentativas = 0, //conta quantas vezes o usuário já tentou
    maxTentativas,//máximo de vezes que o usuário pode tentar
    numeroMaximo, //maior número possível
    numeroMinimo //menor número possível
    

const sortear = document.querySelector("#botaoSortear")
const novaTentativa = document.querySelector('#tentar')
const reiniciar = document.querySelector('#reiniciar')
const tela1 = document.querySelector('.definirParametros')
const tela2 = document.querySelector('.sorteio')


//Ler os parâmetros definidos pelo usuário
function sorteio() {
    numeroMinimo = parseInt(document.getElementById('numeroMinimo').value)
    numeroMaximo = parseInt(document.getElementById('numeroMaximo').value)
    maxTentativas = parseInt(document.getElementById('maxTentativas').value)
    //Ver se o que o usuário digitou é válido. NÃO SEI POR QUE CAR*** ISSO TÁ ERRADOOOOOOOOOOOOOOOO!!! Não tá dando erro quando os valores são nulos
    if(numeroMaximo <= numeroMinimo || maxTentativas <= 0 || numeroMaximo <=0 || numeroMinimo < 0 || numeroMaximo === "" || numeroMinimo === "" || maxTentativas === ""){
        alert("Valor inválido!")
    } 
    //Se estiverem certos, muda a tela e sorteia um número
    else {
        tela1.style.display = 'none'
        tela2.style.display = 'block'
        numeroSorteado = (Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo)
        console.log ("Número sorteado:" + numeroSorteado)
    }
}

function jogo(){    
    tentativa = parseInt(document.getElementById('tentativa').value)
    contagemTentativas = contagemTentativas + 1
    if (contagemTentativas < maxTentativas){
        //Se acertar
        if (tentativa == numeroSorteado) {
            novaTentativa.style.display = 'none'
            reiniciar.style.display = 'block'
            document.getElementById('resposta').innerHTML = "ACERTOOOU! O número sorteado foi " + numeroSorteado + ". Você tentou " + contagemTentativas + " vez(es). Deseja tentar mais uma vez?"
            console.log("Acertou:" + contagemTentativas)
        } 
        //Se errar para um número maior
        else if(tentativa > numeroSorteado){
            document.getElementById('resposta').innerHTML = "Não é esse... Tente um número menor."
            console.log("Errou, tente menor Tentativas:" + contagemTentativas)
            
        }   
        //Se errar para um número maior
        else if(tentativa < numeroSorteado){
            document.getElementById('resposta').innerHTML = "Não é esse... Tente um número maior."
            console.log("Errou, tente maior. Tentativas:" + contagemTentativas)
            
         }    
    }//Se acabaram as tentativas
    else if (tentativa != numeroSorteado) {
        document.getElementById('resposta').innerHTML = "Você errou, e não possui mais tentativas. O número sorteado era " + numeroSorteado + ". Deseja tentar mais uma vez?" 
        novaTentativa.style.display = 'none'
        reiniciar.style.display = 'block'
        
    }
}

function restart(){
    tela2.style.display = 'none'
    tela1.style.display = 'block'
    reiniciar.style.display = 'none'
    novaTentativa.style.display = 'block'
    document.getElementById('resposta').innerHTML = ""
    contagemTentativas = 0
}