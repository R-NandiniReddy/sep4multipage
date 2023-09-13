 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpla5m96sbAimVU9m0pETSQdC9-rcaqEU",
  authDomain: "nourish-709e6.firebaseapp.com",
  databaseURL: "https://nourish-709e6-default-rtdb.firebaseio.com",
  projectId: "nourish-709e6",
  storageBucket: "nourish-709e6.appspot.com",
  messagingSenderId: "334376663410",
  appId: "1:334376663410:web:62e68ad05eb590013105eb",
  measurementId: "G-B7SZNJQ9QE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("ur name");
  document.getElementById("usernameDisplay").innerHTML = "Welcome, " + username + "!";


       
function myroom() {
       const roomName = document.getElementById('roomName').value;
       const roomRef = firebase.database().ref('rooms').push();
       roomRef.set({
           name: roomName
       }).then(() => {
           document.getElementById('displayRoomName').innerText = "Room Name: " + roomName + "!";
           window.location.href = "two.html";
       });
   }       
  