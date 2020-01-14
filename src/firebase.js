import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVmDQPRfvhcxucXedWn35G9UA3a5GLISA",
  authDomain: "toppat-fba95.firebaseapp.com",
  databaseURL: "https://toppat-fba95.firebaseio.com",
  projectId: "toppat-fba95",
  storageBucket: "toppat-fba95.appspot.com",
  messagingSenderId: "52807060062",
  appId: "1:52807060062:web:2b8cd3ed6e450277ad02cf",
  measurementId: "G-3CGPD12C4M"
});

const db = firebaseApp.firestore();

const addTickerCountToUser = (user, ticker, count) => {
  const date = new Date().toISOString()
  db.collection(user.toLowerCase())
    .doc(ticker.toLowerCase())
    .collection('ticker')
    .doc(date)
    .set({
      count,
    })
    .then(() => {
      console.log('added')
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
  });
};

const getTickerCount = (user, ticker) => {
  return db.collection(user.toLowerCase())
    .doc(ticker.toLowerCase())
    .collection('ticker')
    .get()
    .then(function(querySnapshot) {
      let count = 0
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          count = doc.data().count;
      });
      return count
  })
  .catch(function(error) {
    console.log("Error getting document:", error);
});
};

export { db, addTickerCountToUser, getTickerCount };