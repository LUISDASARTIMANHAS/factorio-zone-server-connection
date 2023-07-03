const conteudo = document.querySelector("#Server");
const body = document.querySelector("#screenLoad");
const labelLogin = document.getElementById("labelLogin");
const conteudoSty = conteudo.style
const bodySty = body.style
const ADMPadrao = localStorage.getItem("ADMPADRAO")
const keyADM = localStorage.getItem("KEYADM")
const barload = document.getElementById("barlogin");
const d = new Date();
let dia = d.getDate();
let mes = d.getMonth();
let ano = d.getFullYear();
let hora = d.getHours();


var iniciar2 = "no";
    var width = 70;
    var barspeed = 200;
    var id = setInterval(frame, barspeed);

function frame() {

if (width >= 100) {
clearInterval(id);
iniciar2 = "sim";
    
  
  
if(keyADM ==dia+mes+ano+hora){
if (ADMPadrao == "SIM") {
    bodySty.display = "none"
    conteudoSty.display = ""
}else{
  labelLogin.innerHTML = "403 - ACESSO NEGADO⚠️ PARECE QUE VOCE NÃO TEM AUTORIZAÇÃO."
  barload.innerHTML = "CAREGADO! " + width + "%";}

}else{
  labelLogin.innerHTML = "NÃO FOI POSSIVEL FAZER LOGIN, ACESSO EXPIRADO POR FAVOR ENTRE NO LAUNCHER NOVAMENTE⚠️"
  barload.innerHTML = "CAREGADO! " + width + "%";}//auth2
  
  
  
}else{
width++;
barload.style.width = width + "%";
barload.innerHTML = "CARREGANDO DADOS..." + width + "%";}
}
