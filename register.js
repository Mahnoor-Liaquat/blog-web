import {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  googleProvider,
} from "./firebase.js";

const register = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log(email.value, password.value);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user --->", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error message ", errorMessage);
    });
};
let registerBtn = document.getElementById("registerbtn");
registerBtn.addEventListener("click", register);

let signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("user==>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error==>", errorMessage);
    });
};
let signinWithGoogle = document.getElementById("signinWithGoogle");
signinWithGoogle.addEventListener("click", signinWithGoogle);
