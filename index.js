import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVJj1CeA1EYhYMd-HfiWw5kWWsdl3gtow",
  authDomain: "kec-contacts-2gk-ar-ch-aa.firebaseapp.com",
  projectId: "kec-contacts-2gk-ar-ch-aa",
  storageBucket: "kec-contacts-2gk-ar-ch-aa.appspot.com",
  messagingSenderId: "571844708517",
  appId: "1:571844708517:web:47b0eca7394ceab68b254c",
  measurementId: "G-SXEVZYKZQE",
};

initializeApp(firebaseConfig);
const db = getFirestore();
// const db1 = firebase.firestore();

const callRef = doc(db, "Total Downloads", "Downloads");

const downloadbtn = document.getElementById("downloadbtn");
let count = 0;
// db1
//   .collection("Total Downloads")
//   .doc("Downloads")
//   .get()
//   .then((doc) => {
//     count = doc.data();
//   });

// });
// function countinc(userdocd) {
// const count = userdocd.count;

downloadbtn.addEventListener("click", (e) => {
  getDoc(callRef).then((doc) => {
    // snapshot.docs.forEach((userdoc) => {
    console.log(doc.data().count);
    count = doc.data().count;
  });

  e.preventDefault();
  updateDoc(callRef, { count: count + 1 });
});
// }
