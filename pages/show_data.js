import { collection, query, where,getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const db = getFirestore()
const q = query(collection(db, "students"));


const table = document.querySelector(".data-table")
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());

  var trData = `
  <td>${doc.data().name}</td>
  <td>${doc.data().father_Name}</td>
  <td>${doc.data().contact}</td>
  <td>${doc.data().course_Name}</td>
  <td>${doc.data().roll_no}</td>
  <td>${doc.data().schedule}</td>
  <td>${doc.data().section}</td>

  `
  table.innerHTML += trData;



});