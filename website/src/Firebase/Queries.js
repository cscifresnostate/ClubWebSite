import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function init() {
  const firebaseConfig = {
    apiKey: "AIzaSyDwfxKS52hUqK-Xftzl0T95xKjETGWrVPM",
    authDomain: "clubwebsite-d024b.firebaseapp.com",
    projectId: "clubwebsite-d024b",
    storageBucket: "clubwebsite-d024b.appspot.com",
    messagingSenderId: "386500449456",
    appId: "1:386500449456:web:c38d7c9f90458de8a09775",
    measurementId: "G-FXJ793MRNF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  let res = db;
  return res;
}


export async function getWorkshops() {
  const db = init();
  const workshopCol = collection(db, "workshops");
  const workshopSnapshot = await getDocs(workshopCol);
  const workshopList = workshopSnapshot.docs.map((doc) => doc.data());
  return workshopList;
}

export async function getEvents() {
    const db = init();
    const eventsCol = collection(db, "events");
    const eventsSnapshot = await getDocs(eventsCol);
    const eventsList = eventsSnapshot.docs.map((doc) => doc.data());
    console.log(eventsList);
    return eventsList;
}
