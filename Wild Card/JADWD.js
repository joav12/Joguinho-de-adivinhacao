function ADD(){
    var NN = Math.floor(Math.random() * 50) + 1 
    //var NN = document.getElementById('NN').value
    //var NNcan = document.getElementById('NNcan')
    //var change = document.getElementById('change')

    //gera numero aleatório a partir do numero que o usuario deu
    const numeroAleatorio = Math.floor(Math.random() * parseInt(NN)) + 1

    var troca = document.getElementById('troca')

        if(NN <= 19){
            alert("EU DISSE MAIOR QUE 20")
    
        }else if(numeroAleatorio % 2 === 0){
            
            
            troca.innerHTML = `Eu estou pensando em um numero <span>par</span> entre 1 e ${NN}`
    
            NNcan.innerHTML = `<input type="number" id="adivinha">`
            change.innerHTML = `<button onclick="jogo.verificar()">Verificar se você acertou!</button>`
    
        }else{
            troca.innerHTML = `Eu estou pensando em um numero <span>impar</span> entre 1 e ${NN}`
    
            NNcan.innerHTML = `<input type="number" id="adivinha">`
            change.innerHTML = `<button onclick="jogo.verificar()">Verificar se você acertou!</button>`
        
        }

        return numeroAleatorio
    }
    
    //criação do joguinho
    //a base dele
    class JAD{
    constructor(){
        this.numeroSecreto = ADD()
        this.tentativas = 5
    }


//função que verifica o numero
    verificar(){
        //variaveis para o joguinho
        const adivinha = document.getElementById('adivinha').value
        var resul = document.getElementById('resul')
        var resul2 = document.getElementById('resul2')
        var botaoFi = document.getElementById('botaoFi')
        var botaoFi2 = document.getElementById('botaoFi2')
        var botaoCo = document.getElementById('change')

        if(adivinha == this.numeroSecreto){
            resul.innerHTML = `Você..... você conseguiu? Como? COMO!? Eu fui vencido por um humano, você mereceu essa vitória, eu realmente estava pensando no número ${this.numeroSecreto} parabéns`

            resul2.innerHTML = `Aperte o botão abaixo para jogar de novo ou voltar para o primeiro desáfio!!`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">jogar novamente</button>'

            botaoFi2.innerHTML = `<button onclick="window.location.href = '../index.html'">Primeiro desáfio</button>`

        }else if(this.tentativas <= 1){
            resul.innerHTML = `É como foi previsto, VOCÊ PERDEU`

            resul2.innerHTML = `Aperte o botão abaixo para tentar novamente, ou no caso fracasar novamente e mais uma tentativa <span>FÚTIL</span> de me vencer`

            botaoCo.inert = `cancela`

            botaoFi.innerHTML = '<button onclick="window.location.reload()">Tente novamente</button>'
        }else if(adivinha > this.numeroSecreto){
            this.tentativas --

            resul.innerHTML = `Calma lá amigo! Esse numero é maior comparado com o qual eu pensei e infelizmente Você está equivocado nessa sua tentativa, ainda lhe sobra ${this.tentativas} tentativas restantes` 
        }else{
            this.tentativas --

            resul.innerHTML = `Calma lá amigo! Esse numero é menor comparado com o qual eu pensei e infelizmente Você está equivocado nessa sua tentativa, ainda lhe sobra ${this.tentativas} tentativas restantes` 
        }
    }

}

const jogo = new JAD




