import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

let classImgBtn = document.querySelector("#cc-img");
// console.log(classImgBtn)

if (classImgBtn) {
  classImgBtn.addEventListener("click", () => {
    
    location.href = "classregister.html";
  });
}

const stdRegisterBtn = document.querySelector("#std-register")
stdRegisterBtn.addEventListener("click", () => {
    location.href = "student_register.html";
  });

const classesDiv = document.querySelector(".classes");
window.onload = async () => {
  const db = getFirestore();
  const q = query(collection(db, "classes"));

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    var classCard = `
    

        <div class="card my-class" style="width: 18rem;">
  <img class="card-img-top" src="../assets/images.jpeg" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${doc.data().course_Name} <span>(${doc.data().section_Name})</span></h4>
    <h5 class="card-text">${doc.data().teacher_Name}.</h5>
    
  </div>
</div>
    `;

    classesDiv.innerHTML += classCard;

    console.log(doc.id, " => ", doc.data());
  });
};


