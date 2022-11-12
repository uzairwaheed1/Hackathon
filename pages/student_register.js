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
  
  const createClassBtn = document.querySelector(".rs-btn");
  console.log(createClassBtn);
  
  const getClassData = async () => {
    const name = document.querySelector("#name");
    const fatherName = document.querySelector("#f-name");
    const rollNo = document.querySelector("#roll-no");
    const contact = document.querySelector("#contact-no")
    const cnicNo = document.querySelector("#cnic-no");
    const picture = document.querySelector("#picture");
    const courseName = document.querySelector("#course-name");
    const section = document.querySelector("#section");
    // const courseName = document.querySelector("#course-name");
    console.log(name)
    console.log(fatherName);
    console.log(rollNo);
    console.log(cnicNo);
    console.log(courseName);
    console.log(section);
  
    // await setDoc(doc(db, "classes", "LA"), {
    //     teacher_Name:teacherName,
    //     section_Name:sectionName,
    //     course_Name:courseName,
    //     batch_No:batchNo,
    //     schedule:schedule,
    //     class_Timings:classTimings,
    //   });
  
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "students"), {
      name: name.value,
      father_Name: fatherName.value,
      roll_no: rollNo.value,
      contact: contact.value,
      schedule: cnicNo.value,
      course_Name: courseName.value,
      section: section.value,
    });
    console.log("Document written with ID: ", docRef.id);
  
    name.value = ""
    fatherName.value = ""
    rollNo.value = ""
    contact.value = ""
    cnicNo.value = ""
    courseName.value = ""
    section.value = ""
    swal({
      title: "Done",
      text: "Student Has Been Register",
      icon: "success",
    });
    
  
  };
  
  createClassBtn.addEventListener("click", getClassData);