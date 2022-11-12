import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const signIn = () => {
  const email = document.querySelector("#login-email");
  const pass = document.querySelector("#login-pass");
  console.log(email)

  const auth = getAuth();

signInWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    location.href = "pages/dashboard.html"




    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

