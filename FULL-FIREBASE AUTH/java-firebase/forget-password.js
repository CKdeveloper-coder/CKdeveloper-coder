const email = document.getElementById("email");
const message = document.getElementById("message");

const forgotPasswordHandler = () => {
  var forgotPassword = firebase.auth().sendPasswordResetEmail(email.value);
  console.log("forgotPassword",forgotPassword)
  forgotPassword.then((res) => {
    console.log(res)
    // Password reset email sent!
    // ..
    message.innerHTML = "Password reset email sent!"
    message.style.color = "green"

  });
  forgotPassword.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(error);
  });
};
