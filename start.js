function start() {
  const url = "https://factorio.zone/api/instance/start"; // URL de destino
  const versao = document.getElementById("versions").value;
  const regiao = document.getElementById("regions").value;
  const mundo = document.getElementById("saves").value;
  const secret = localStorage.getItem("key");
  const constructorSend =
    "visitSecret=" +
    secret +
    "&" +
    "region=" +
    regiao +
    "&" +
    "version=" +
    versao +
    "&" +
    "save=" +
    mundo;
const requestOptions = {
  method: 'POST',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: constructorSend
};
  
  
fetch(url, requestOptions)
    .then((response) => {
      if (response.statusCode==200) {
        window.location.href = "/terminal";
        alert(response.responseMessage)
      } else {
        response.text().then((errorMessage) => {
          alert(errorMessage);
        });
      }
    })
    .catch((error) => console.error(error));
}
