const message = document.getElementById("message")
const verified = document.getElementById("verified")
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        message.innerHTML = user.email;
      if (user.emailVerified) {
        window.location.assign("../../web development-c/CSS FOLDER/IT-COMPANY/Structure/INDEX.html");
      }
    } else {
      window.location.assign("../pages/login.html");
    }
  });
  
  // resend
  const resendEmailHandler = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
        verified.innerHTML = "Email sent Sucessfully"
        verified.style.color = "green"
      });
  };
  
  const goHomeHandler = () => {
    window.location.reload();
  };