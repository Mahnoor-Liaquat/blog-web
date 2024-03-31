import { auth, signInWithEmailAndPassword } from "./firebase.js";

const login = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log(email.value, password.value);
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location = "profile.html";
      console.log("user --->", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error message ", errorMessage);
    });
};
let loginBtn = document.getElementById("loginbtn");
loginBtn.addEventListener("click", login);
