import {
  onAuthStateChanged,
  auth,
  signOut,
  sendEmailVerification, 
} from "./firebase.js";

let name = document.getElementById("name");
let email = document.getElementById("email");

let main = document.getElementById("main");
let loader = document.getElementById("loader");

onAuthStateChanged(auth, (user) => {
  if (user) {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email has been send successfully");
    });

    console.log("user===>", user);
    if (location.pathname !== "/profile.html" &&
    location.pathname !== "/blogpost.html" && location.pathname !=="/index.html") {
      window.location = "profile.html";
    }

    name.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    email.innerHTML = user.email;
    main.style.display = "flex";
    loader.style.display = "none";
  } else if (user!==login){
    console.log("user is not login");
    if (
      location.pathname !== "/login.html" &&
      location.pathname !== "/register.html"
    ) {
      window.location = "login.html";
    }
    else{
      window.location = "./index.html"
    }
  }
});
let logout = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
      window.location = "login.html";
    })
    .catch((error) => {
      console.log("error===>", error);
    });
};

let logoutBtn = document.getElementById("logoutbtn");
logoutBtn && logoutBtn.addEventListener("click", logout);
