const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
// const signUpHandler = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email.value, password.value)
//     .then((res) => {
//       firebase
//         .auth()
//         .currentUser.sendEmailVerification()
//         .then((res) => {
//           console.log("Res", res.user);
//           message.innerHTML = "Success !";
//           message.style.color = "green";
//           window.location.assign("./email-verification.html");
//         });
//     })
//     .catch((error) => {
//       console.log("Error message", error.message);
//       message.innerHTML = error.message;
//       message.style.color = "red";
//     });
// };
 

const signUpHandler = () =>{
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((res) => {
    // Signed in
    console.log("Res", res.user);
              message.innerHTML = "Success !";
              message.style.color = "green";
              window.location.assign("../pages/email-verification.html");
    // ...
  })
  .catch((error) => {
    console.log("Error message", error.message);
          message.innerHTML = error.message;
          message.style.color = "red";
  });

}
const loginWithGoogleHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result", result);
        window.location.assign("../../web development-c/CSS FOLDER/IT-COMPANY/Structure/INDEX.html");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };