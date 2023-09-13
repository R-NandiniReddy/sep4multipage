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

const msgbox = document.getElementById('msgbox');
   const msginput = document.getElementById('msginput');

   function send() {
       const messageText = msginput.value;

       if (messageText.trim() !== '') {
           const likes = 0;

        const message = {
               text: messageText,
               likes: likes
           };

           const messagesRef = firebase.database().ref('messages');
           messagesRef.push(message);
        msginput.value = '';
       }
   }
  const messagesRef = firebase.database().ref('messages');
   messagesRef.on('child_added', (snapshot) => {
       const message = snapshot.val();
       displayMessage(message);
   });

   function displayMessage(message) {
       const messageElement = document.createElement('div');
       messageElement.className = 'message';
       const messageTextElement = document.createElement('p');
       messageTextElement.textContent = message.text;
       const likeButton = document.createElement('button');
       likeButton.textContent = `like (${message.likes})`;
       likeButton.addEventListener('click', () => increaseLikes(snapshot.key, message.likes));
       messageElement.appendChild(messageTextElement);
       messageElement.appendChild(likeButton);
       msgbox.appendChild(messageElement);
   }

   function increaseLikes(messageKey, currentLikes) {
       const likes = currentLikes + 1;
       firebase.database().ref(`messages/${messageKey}/likes`).set(newLikes);
    
   }
   