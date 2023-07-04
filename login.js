const secret = "QvZQo1LopQAsRue64c2P4E";
const constructorSend =
  "userToken=LbKJWQpvqPkfqFSWLAZ67Vp3&" +
  "visitSecret=" +
  secret +
  "&reconnected=" +
  false +
  "&script=" +
  "https%3A%2F%2Ffactorio.zone%2Fcache%2Fmain.988ed863ea52a416157f.js"

localStorage.setItem("key","QvZQo1LopQAsRue64c2P4E");
fetch("https://factorio.zone/api/user/login", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: constructorSend,
})
  .then((response) => {
    if (response.statusCode == 200) {
      window.location.href = "/terminal";
      alert(response.responseMessage);
    } else {
      response.text().then((errorMessage) => {
        alert(errorMessage);
      });
    }
  })
  .catch((error) => console.error(error));
