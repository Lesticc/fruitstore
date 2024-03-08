window.onload = () => {

    function pobre() {
        window.alert("Vai trabalhar homem!")
    }

        bdm()

    const dinheirofeito = document.getElementById("makemoney")
    const dinheiroperdido = document.getElementById("wastemoney")
    const dinheirototal = document.getElementById("totalmoney")

    let dinheirof = 0;
    let dinheirop = 0;
    let dinheirot = 0;


    const trabalhar = document.getElementById("botao")
    const dinheiro = document.getElementById("money")
    const clicksps = document.getElementById("cps")
  
    let totalMoney = 0;
    let work = 1;
    let cps = 0;
  
    trabalhar.onclick = function() {
      dinheirof += work;
      totalMoney += work;
      dinheirot += work;
      dinheirototal.innerText = `${Math.round(dinheirot)}`
      dinheiro.innerText = `${Math.round(totalMoney)}`;
      dinheirofeito.innerText = `${Math.round(dinheirof)}`
    };

    const maca = document.getElementById('marketplaceone')
    const macas = document.getElementById('applenum')
    const melancia = document.getElementById('marketplacetwo')
    const melancias = document.getElementById('watermelonnum')
    
    let totalMaca = 0;
    let totalMelancia = 0;
    let buy = 1;

    maca.onclick = function() {
        if(totalMoney >= 5){
            totalMaca += buy 
            totalMoney -= 5
            dinheirop += 5
            dinheirot -=5
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            dinheiroperdido.innerText = `${Math.round(dinheirop)}`
            macas.innerText = `${totalMaca}`
        }else{pobre()}
    }
    melancia.onclick = function() {
        if(totalMoney >= 7){
            totalMelancia += buy
            totalMoney -= 7
            dinheirop +=7
            dinheirot -=7
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            dinheiroperdido.innerText = `${Math.round(dinheirop)}`
            melancias.innerText = `${totalMelancia}`
        }else{pobre()}
    }

    const barracademacas = document.getElementById('sellapple')
    const barracasdemacas = document.getElementById('sellapplenum')

    let tbdma = 0

    function bdm(){
        setInterval(() => {
            totalMoney += cps
            dinheirof += cps
            dinheirot += cps;
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            dinheirofeito.innerText = `${Math.round(dinheirof)}`
        }, eval(1000));
    }

    barracademacas.onclick = function() {
        if(totalMaca >=20){
            tbdma += buy
            totalMaca -= 20
            macas.innerText = `${totalMaca}`
            barracasdemacas.innerText = `${tbdma}`
            cps += 1
            clicksps.innerText = `${cps}`
        }else{if(totalMoney >= 100){
            tbdma += buy
            totalMoney -= 100
            dinheirop +=100
            dinheirot -=100
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            macas.innerText = `${totalMaca}`
            barracasdemacas.innerText = `${tbdma}`
            dinheiroperdido.innerText = `${Math.round(dinheirop)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            cps += 1
            clicksps.innerText = `${cps}`
        }else{pobre()}}
    }

    let tbdme = 0;

    const barracademelancia = document.getElementById('sellwatermelon')
    const barracasdemelancias = document.getElementById('sellwatermelonnum')

    barracademelancia.onclick = function() {
        if(totalMelancia >= 30){
            tbdme += buy
            totalMelancia -=30
            melancias.innerText = `${totalMelancia}`
            barracasdemelancias.innerText = `${tbdme}`
            cps += 3
            clicksps.innerText = `${cps}`
        }else{if(totalMoney >=210){
            tbdme += buy
            totalMoney -=210
            dinheirop += 210
            dinheirot -=210
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            dinheiroperdido.innerText = `${Math.round(dinheirop)}`
            barracasdemelancias.innerText = `${tbdme}`
            cps += 3
            clicksps.innerText = `${cps}`
        }else{pobre()}}
    }
}
