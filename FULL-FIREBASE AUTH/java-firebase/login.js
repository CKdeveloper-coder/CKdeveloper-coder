const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const loginBtn = document.getElementById("button");
const loginHandler = () => {
    button.value = "Loading ...";
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((res) => {
      console.log(res.user);
      message.innerHTML = "Success !";
      message.style.color = "green";
      if (res.user.emailVerified) {
        window.location.assign("../../web development-c/CSS FOLDER/IT-COMPANY/Structure/INDEX.html");
      } else {
        window.location.assign("../pages/email-verification.html");
      }
    })
    .catch((error) => {
      console.log(error.message);
      message.innerHTML = "Email or password incorrect !";
      message.style.color = "red";
    });
};
