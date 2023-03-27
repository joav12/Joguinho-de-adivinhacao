//gera numero aleatório
const numeroAleatorio = Math.floor(Math.random() * 10) + 1
 
//criação do joguinho
//a base dele
class JAD{
    constructor(){
        this.numeroSecreto = numeroAleatorio
        this.tentativas = 4
    }

//função que verifica o numero
    verificar(){
        //variaveis para o joguinho
        const adivinha = document.getElementById('adivinha').value
        var resul = document.getElementById('resul')
        var resul2 = document.getElementById('resul2')
        var botaoFi = document.getElementById('botaoFi')
        var botaoWC = document.getElementById('botaoWC')
        var botaoCo = document.getElementById('botaoCo')
        
        if(adivinha == this.numeroSecreto){
            resul.innerHTML = `Ora ora parece que temos um cheroque rromes aqui não é mesmo, Eu estáva pensando exatamente no numero ${this.numeroSecreto} parabéns`

            resul2.innerHTML = `Aperte o botão abaixo para jogar de novo!!`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">jogar novamente</button>'

        }else if(this.tentativas <= 1){
            resul.innerHTML = `É pareceiro, VOCÊ PERDEU`

            resul2.innerHTML = `Aperte o botão abaixo para tentar novamente, ou no caso fracasar novamente MUAHAHAHAHA`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">Tente novamente</button>'
        }else if(adivinha > this.numeroSecreto){
            this.tentativas --

            resul.innerHTML = `Calma lá amigo! Esse numero é maior comparado com o qual eu pensei e infelizmente Você está equivocado nessa sua tentativa, ainda lhe sobra ${this.tentativas} tentativas restantes` 
        }else{
            this.tentativas --

            resul.innerHTML = `Calma lá amigo! Esse numero é menor comparado com o qual eu pensei e infelizmente Você está equivocado nessa sua tentativa, ainda lhe sobra ${this.tentativas} tentativas restantes` 
        }

        if(adivinha == this.numeroSecreto && this.numeroSecreto == 7){
            resul.innerHTML = `Ora ora parece que temos um cheroque rromes aqui não é mesmo, Eu estáva pensando exatamente no numero ${this.numeroSecreto} parabéns`

            resul2.innerHTML = `Aperte o botão abaixo para jogar de novo!!`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">jogar novamente</button>'
            botaoWC.innerHTML = `<button onclick="window.location.href = './Wild Card/WC.html'">Wild card</button>`
        } else if(adivinha == 69 && this.tentativas <= 1){
            resul.innerHTML = `Você errou.....`

            resul2.innerHTML = `Sério cara? 69? Safado`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">Tente novamente</button>'
        }
    }
}

const jogo = new JAD