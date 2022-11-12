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

const createClassBtn = document.querySelector(".cc-btn");
console.log(createClassBtn);

const getClassData = async () => {
  const teacherName = document.querySelector("#teacher-name");
  const sectionName = document.querySelector("#section-name");
  const courseName = document.querySelector("#course-name");
  const batchNo = document.querySelector("#batch-no");
  const schedule = document.querySelector("#schedule");
  const classTimings = document.querySelector("#class-timings");
  // console.log(teacherName)
  // console.log(sectionName);
  // console.log(courseName);
  // console.log(batchNo);
  // console.log(schedule);
  // console.log(classTimings);

  // await setDoc(doc(db, "classes", "LA"), {
  //     teacher_Name:teacherName,
  //     section_Name:sectionName,
  //     course_Name:courseName,
  //     batch_No:batchNo,
  //     schedule:schedule,
  //     class_Timings:classTimings,
  //   });

  const db = getFirestore();
  const docRef = await addDoc(collection(db, "classes"), {
    teacher_Name: teacherName.value,
    section_Name: sectionName.value,
    course_Name: courseName.value,
    batch_No: batchNo.value,
    schedule: schedule.value,
    class_Timings: classTimings.value,
  });
  console.log("Document written with ID: ", docRef.id);

  teacherName.value = ""
  sectionName.value = ""
  courseName.value = ""
  batchNo.value = ""
  schedule.value = ""
  classTimings.value = ""
  swal({
    title: "Done",
    text: "Class has been created",
    icon: "success",
  });
  

};

createClassBtn.addEventListener("click", getClassData);
