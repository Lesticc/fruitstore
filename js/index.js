window.onload = () => {

    function pobre() {
        window.alert("Vai trabalhar homem!")
    }

        bdm()

    const dinheirofeito = document.getElementById("makemoney")
    const dinheiroperdido = document.getElementById("wastemoney")
    const dinheirototal = document.getElementById("totalmoney")

    const trabalhar = document.getElementById("botao")
    const dinheiro = document.getElementById("money")
    const clicksps = document.getElementById("cps")
    const dinheiropc = document.getElementById("dpc")

    const nomebotaoum = document.getElementById("itemnumeroum")
    const nomebotaodo = document.getElementById("itemnumerodois")
    const nomebotaotr = document.getElementById("itemnumerotres")
    const nomebotaoqu = document.getElementById("itemnumeroquatro")
    const nomebotaoci = document.getElementById("itemnumerocinco")
    const nomebotaose = document.getElementById("itemnumeroseis")

    const maca = document.getElementById('marketplaceone')
    const macas = document.getElementById('applenum')
    const melancia = document.getElementById('marketplacetwo')
    const melancias = document.getElementById('watermelonnum') 
    const abacaxi = document.getElementById('marketplacethr')
    const abacaxis = document.getElementById('pineapplenum')

    const barracademaca = document.getElementById('sellapple')
    const barracasdemacas = document.getElementById('sellapplenum')
    const barracademelancia = document.getElementById('sellwatermelon')
    const barracasdemelancias = document.getElementById('sellwatermelonnum')
    const barracadeabacaxi = document.getElementById('sellpineapple')
    const barracasdeabacaxis = document.getElementById('sellpineapplenum')

    const btsr = document.getElementById('btsr')
    const rebirthnum = document.getElementById('rebirthnum')

    const rslpu = document.getElementById('rebirthstorelistpu')
    const rslpd = document.getElementById('rebirthstorelistpd')
    const rslpt = document.getElementById('rebirthstorelistpt')
    const rslpq = document.getElementById('rebirthstorelistpq')

    trabalhar.onclick = function() {
      dinheirof += work; 
      totalMoney += work;
      dinheirot += work;
      dinheirototal.innerText = `${Math.round(dinheirot)}`
      dinheiro.innerText = `${Math.round(totalMoney)}`;
      dinheirofeito.innerText = `${Math.round(dinheirof)}`
      console.log(`${work} || ${tbdme} || ${tbdme/10}`)
    };

    function ifnivel() {
        if(nivel == 1){
            nomebotaoum.innerText = "R$5 Maçã"
            nomebotaodo.innerText = "R$7 Melancia"
            nomebotaotr.innerText = "R$10 Abacaxi"
            nomebotaoqu.innerText = "20 Maçãs: Barraca de Maçãs (R$1/s)"
            nomebotaoci.innerText = "30 Melancias: Barraca de Melancia (R$3/s)"
            nomebotaose.innerText = "40 Abacaxis: Barraca de Abacaxi (R$5/s)"
            rslpu.innerText = "150 Barracas de Maçã"
            rslpd.innerText = "200 Barracas de Melancia"
            rslpt.innerText = "250 Barracas de Abacaxi"
            rslpq.innerText = "1.000.000 de Dinheiro"
        }else if(nivel == 2){
            nomebotaoum.innerText = "R$15 Coxinha"
            nomebotaodo.innerText = "R$25 Pastel"
            nomebotaotr.innerText = "R$35 Enroladinho"
            nomebotaoqu.innerText = "40 Coxinhas: Salgaderia (R$3/s)"
            nomebotaoci.innerText = "60 Pasteis: Pastelaria (R$9/s)"
            nomebotaose.innerText = "80 Enrolados: Lanchonete (R$15/s)"
        }
    }

    setInterval(() => {
        ifnivel();
    }, 100);

    maca.onclick = function() {
        if(nivel == 1){
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
        }else
        if(nivel == 2){
            if(totalMoney >=15){
                totalMaca += buy 
                totalMoney -= 15
                dinheirop += 15
                dinheirot -=15
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                macas.innerText = `${totalMaca}`
            }else{pobre()}
        }
    }
    melancia.onclick = function() {
        if(nivel == 1){
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
        }else 
        if(nivel == 2){
            if(totalMoney >= 25){
                totalMelancia += buy 
                totalMoney -= 25
                dinheirop += 25
                dinheirot -= 25
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                melancias.innerText = `${totalMelancia}`
            }else{pobre()}
        }
    }
    abacaxi.onclick = function() {
        if(nivel == 1){
            if(totalMoney >= 10){
                totalAbacaxi += buy 
                totalMoney -= 10
                dinheirop += 10
                dinheirot -= 10
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                abacaxis.innerText = `${totalAbacaxi}`
            }else{pobre()}
        }else 
        if(nivel == 2){
            if(totalMoney >= 35){
                totalAbacaxi += buy 
                totalMoney -= 35
                dinheirop += 35
                dinheirot -= 35
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                abacaxis.innerText = `${totalAbacaxi}`
            }else{pobre()}
        }
    }

    function bdm(){
        setInterval(() => {
            totalMoney += cps
            dinheirof += cps
            dinheirot += cps;
            dinheirototal.innerText = `${Math.round(dinheirot)}`
            dinheiro.innerText = `${Math.round(totalMoney)}`
            dinheirofeito.innerText = `${Math.round(dinheirof)}`
            saveGame()
        }, 1000);
    }

    barracademaca.onclick = function() {
        if(nivel == 1){
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
        }else if(nivel == 2){
            if(totalMaca >=40){
                tbdma += buy 
                totalMaca -= 40
                macas.innerText = `${totalMaca}`
                barracasdemacas.innerText = `${tbdma}`
                cps += 3
                clicksps.innerText = `${cps}`
            }else{if(totalMoney >= 600){
                tbdma += buy 
                totalMoney -= 600
                dinheirop += 600
                dinheirot -= 600
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${totalMoney}`
                barracasdemacas.innerText = `${tbdma}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                cps += 3
                clicksps.innerText = `${cps}`
            }else{pobre()}}
        }
    } 

    barracademelancia.onclick = function() {
        if(nivel == 1){
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
        }else if(nivel == 2){
            if(totalMelancia >= 60){
                tbdme += buy
                totalMelancia -= 60
                melancias.innerText = `${totalMelancia}`
                barracasdemelancias.innerText = `${tbdme}`
                cps += 9
                clicksps.innerText = `${cps}`
            }else{if(totalMoney >= 1500){
                tbdme += buy 
                totalMoney -= 1500
                dinheirop += 1500
                dinheirot -= 1500
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                barracasdemelancias.innerText = `${tbdme}`
                cps += 9
                clicksps.innerText = `${cps}`
            }else{pobre()}}
        }
    }

    barracadeabacaxi.onclick = function() {
        if(nivel == 1){
            if(totalAbacaxi >= 40){
                tbdab += buy
                totalAbacaxi -=40
                abacaxi.innerText = `${totalMelancia}`
                barracasdeabacaxis.innerText = `${tbdab}`
                cps += 5
                clicksps.innerText = `${cps}`
            }else{if(totalMoney >=400){
                tbdab += buy
                totalMoney -=400
                dinheirop += 400
                dinheirot -=400
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                barracasdeabacaxis.innerText = `${tbdab}`
                cps += 5
                clicksps.innerText = `${cps}`
            }else{pobre()}}
        }else if(nivel == 2){
            console.log('BDAB')
            if(totalAbacaxi >= 80){
                tbdab += buy
                abacaxis -= 80
                abacaxis.innerText = `${totalAbacaxi}`
                barracasdeabacaxis.innerText = `${tbdab}`
                cps += 15
                clicksps.innerText = `${cps}`
            }else{if(totalMoney >= 1500){
                tbdab += buy 
                totalMoney -= 1500
                dinheirop += 1500
                dinheirot -= 1500
                dinheirototal.innerText = `${Math.round(dinheirot)}`
                dinheiro.innerText = `${Math.round(totalMoney)}`
                dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                barracasdeabacaxis.innerText = `${tbdab}`
                cps += 15
                clicksps.innerText = `${cps}`
            }else{pobre()}}
        }
    }

    btsr.onclick = function() {
        if(nivel == 1){
            if(totalMoney >= 1000000){
                if(tbdma >=150 ){
                    if(tbdme >= 200){
                        if(tbdab >=250){
                            btsrnum += 1
                            rebirthnum.innerText = `${btsrnum}`
                            btsrmulti += 0.5
                            work = 1*(btsrmulti)
                            totalMoney = 0
                            totalMaca = 0
                            totalMelancia = 0
                            tbdma = 0
                            tbdme = 0
                            dinheirop = 0
                            dinheirof = 0
                            dinheirot = 0
                            cps = 0
                            nivel += 1
                            dinheiropc.innerText = `${work}`
                            clicksps.innerText = `${cps}`
                            macas.innerText = `${totalMaca}`
                            melancias.innerText = `${totalMelancia}`
                            barracasdemelancias.innerText = `${tbdme}`
                            barracasdemacas.innerText = `${tbdma}`
                            dinheiro.innerText = `${Math.round(totalMoney)}`
                            dinheirototal.innerText = `${Math.round(dinheirot)}`
                            dinheiroperdido.innerText = `${Math.round(dinheirop)}`
                            dinheirofeito.innerText = `${Math.round(dinheirof)}`
                            alert('Olá, o jogo ainda está em desenvolvimento a busca de seu fim. Obrigado por jogar! Em breve novas atualizações, aproveite seu nível 2 para upar e já aproveitar para chegar ao nível 3 na próxima atualização!')
                        }else{pobre()};
                    }else{pobre()};
                }else{pobre()};
            }else{pobre()};
        }else if(nivel == 2){
        }
    }

    function loadGame() { 
        /*1*/    if(localStorage.getItem('totalMoney') != null) { // Verifica se existe, se não existir continua o jogo.
              totalMoney = Number(localStorage.getItem('totalMoney')); // Atribui o valor salvo no localStorage para a variável.
              money.innerText = `${Math.round(totalMoney)}`; // Atualiza o valor do dinheiro.
            }
        /*2*/    if(localStorage.getItem('work') != null) {
              work = Number(localStorage.getItem('work'));
              dinheiropc.innerText = `${Math.round(work)}`
            }
        /*3*/    if(localStorage.getItem('dinheirof') != null) {
              dinheirof = Number(localStorage.getItem('dinheirof'));
              dinheirofeito.innerText = `${Math.round(dinheirof)}`;
            }
        /*4*/    if(localStorage.getItem('dinheirop') != null) {
              dinheirop = Number(localStorage.getItem('dinheirop'));
              dinheiroperdido.innerText = `${Math.round(dinheirop)}`;
            }
        /*5*/    if(localStorage.getItem('dinheirot') != null) {
              dinheirot = Number(localStorage.getItem('dinheirot'));
              dinheirototal.innerText = `${Math.round(dinheirot)}`;
            }
        /*6*/    if(localStorage.getItem('btsrmulti') != null) {
              btsrmulti = Number(localStorage.getItem('btsrmulti'));
            }
        /*7*/    if(localStorage.getItem('cps') != null) {
              cps = Number(localStorage.getItem('cps'));
              clicksps.innerText = `${Math.round(cps)}`;
            }
        /*8*/    if(localStorage.getItem('totalMaca') != null) {
              totalMaca = Number(localStorage.getItem('totalMaca'));
              macas.innerText = `${totalMaca}`;
            }
        /*9*/    if(localStorage.getItem('totalMelancia') != null) {
              totalMelancia = Number(localStorage.getItem('totalMelancia'));
              melancias.innerText = `${totalMelancia}`;
            }
        /*10*/    if(localStorage.getItem('tbdma') != null) {
              tbdma = Number(localStorage.getItem('tbdma'));
              barracasdemacas.innerText = `${tbdma}`;
            }
        /*11*/    if(localStorage.getItem('tbdme') != null) {
              tbdme = Number(localStorage.getItem('tbdme'));
              barracasdemelancias.innerText = `${tbdme}`;
            }
        /*12*/    if(localStorage.getItem('btsrnum') != null) {
              btsrnum = Number(localStorage.getItem('btsrnum'));
              rebirthnum.innerText = `${btsrnum}`;
            }
        /*13*/    if(localStorage.getItem('totalAbacaxi') != null) {
              totalAbacaxi = Number(localStorage.getItem('totalAbacaxi'));
              abacaxis.innerText = `${totalAbacaxi}`
            }
        /*14*/    if(localStorage.getItem('tbdab') != null) {
            tbdab = Number(localStorage.getItem('tbdab'));
            barracasdeabacaxis.innerText = `${tbdab}`
          }
        /*13*/    if(localStorage.getItem('nivel') != null) {
            nivel = Number(localStorage.getItem('nivel'));
          }
    }
        
          loadGame();
        
          function saveGame() {
            localStorage.setItem('totalMoney', totalMoney); //1
            localStorage.setItem('work', work) //2
            localStorage.setItem('dinheirof', dinheirof) //3
            localStorage.setItem('dinheirop', dinheirop) //4
            localStorage.setItem('dinheirot', dinheirot) //5
            localStorage.setItem('btsrmulti', btsrmulti) //6
            localStorage.setItem('cps', cps) //7
            localStorage.setItem('totalMaca', totalMaca) //8
            localStorage.setItem('totalMelancia', totalMelancia) //9
            localStorage.setItem('tbdma', tbdma) //10
            localStorage.setItem('tbdme', tbdme) //11
            localStorage.setItem('btsrnum', btsrnum) //12
            localStorage.setItem('totalAbacaxi', totalAbacaxi)
            localStorage.setItem('tbdab', tbdab)
            localStorage.setItem('nivel', nivel)
          }

    }

    function resetData() {
        totalMoney = 0;
        work = 1;
        dinheirof = 0;
        dinheirop = 0;
        dinheirot = 0;
        btsrmulti = 1;
        cps = 0;
        totalMaca = 0;
        totalMelancia = 0;
        tbdma = 0;
        tbdme = 0;
        btsrnum = 0;
        totalAbacaxi = 0;
        tbdab = 0;
        nivel = 1;
        console.log('|-----DATA RESETADA-----|')
        console.log('| Os textos podem não   |')
        console.log('| terem resetados, assim|')
        console.log('| os valores dos textos |')
        console.log('| podem estar errados.  |')
        console.log('|-----------------------|')
    } 


/*
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} // Aqui defino oque é delay

let desconto = 0 // Defino a varíavel "desconto", sendo o valor dela o número 0

funcaodesconto2() // Aqui eu estou rodando a função "funcaodesconto2" (Atual que faz a SetInterval)

async function funcaodesconto() { // Aqui eu faço a função "funcaodesconto"
    desconto += 15 // O desconto é igual à ele + 15
    await delay(60000); // Aqui faz com que espere 60000 milissegundos (o "1 dia")
    desconto -= 15 // Depois desse "1 dia", o valor será agora ele - 15, voltando a 0
}

function funcaodesconto2() { // Aqui eu faço a função "funcaodesconto2"
    setInterval(() => { // Eu coloco um intervalo, que a cada tal tempo (definido 720000ms, o atual 12 dias) ele fará uma ação
        funcaodesconto() // A ação que ele fará a cada 12 dias, será rodar a função "funcaodesconto"
    }, 720000); // Aqui eu coloco o tempo que ele fará essa função
}
*/