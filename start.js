function start() {
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

  fetch("https://factorio.zone/api/instance/start", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: constructorSend,
  })
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
