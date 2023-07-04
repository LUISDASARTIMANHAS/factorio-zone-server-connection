const url = 'https://factorio.zone/api/user/login'; // URL de destino
const secret = "fijahL0GGv3yC6IhBlBtDV";
const constructorSend =
  "userToken=LbKJWQpvqPkfqFSWLAZ67Vp3" +
  "&visitSecret=" +
  secret +
  "&reconnected=" +
  false +
  "&script=" +
  "https%3A%2F%2Ffactorio.zone%2Fcache%2Fmain.988ed863ea52a416157f.js"
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Content-Type": "Accept,*",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "Access-Control-Allow-Origin",
    "Content-Type": "Allow-Origin-Header",
    // Se necessário, adicione outros cabeçalhos aqui
  },
  body: JSON.stringify(constructorSend)
};

localStorage.setItem("key",secret);
fetch(url, requestOptions)
  .then((response) => {
    if (response.status == 200) {
      window.location.href = "/terminal";
      alert(response.responseMessage);
    } else {
        window.location.href = "/Server";
    }
  })
  .catch((error) => console.error(error));
