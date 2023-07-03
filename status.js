Rgb()
setInterval(Reload, 2000)

function Reload() {
    const IPServer = document.getElementById("Porta-Server").value
    const versao = document.getElementById("versions").value
    const regiao = document.getElementById("regions").value
    const mundo = document.getElementById("saves").value
    const mods = document.getElementById("mods-enabled").value
    const FactorioDBStats = { IP: IPServer, Versão: versao, Região: regiao, Mundo: mundo, Mods: mods };
    const slotsNames = {"slot1":"SERVER HUB","slot2":""}
    const slotsNamesDB = JSON.stringify(slotsNames);
    const FactorioDB = JSON.stringify(FactorioDBStats);

    localStorage.setItem("FactorioDB", FactorioDB)
    localStorage.setItem("_rubydesicSaveNames", slotsNamesDB)
    console.log(FactorioDB)
}


function Rgb() {
    const IPServer = document.getElementById("Porta-Server")
    const Logs = document.getElementById("output-area")
    const barload = document.getElementById("barlogin");

    setTimeout(vermelho, 1000)
    setTimeout(laranja, 2000)
    setTimeout(amarelo, 3000)
    setTimeout(verde, 4000)
    setTimeout(azulClaro, 5000)
    setTimeout(azul, 6000)
    setTimeout(roxo, 7000)

    function vermelho() {
        IPServer.style.color = "red"
        barload.style.background = "red"
    }
    function laranja() {
        IPServer.style.color = "orange"
        barload.style.background = "orange"
    }
    function amarelo() {
        IPServer.style.color = "yellow"
        barload.style.background = "yellow"
    }
    function verde() {
        IPServer.style.color = "green"
        barload.style.background = "green"
    }
    function azulClaro() {
        IPServer.style.color = "lightblue"
        barload.style.background = "lightblue"
    }
    function azul() {
        IPServer.style.color = "blue"
        barload.style.background = "blue"
    }
    function roxo() {
        IPServer.style.color = "purple"
        barload.style.background = "purple"
        Rgb()
    }

}
