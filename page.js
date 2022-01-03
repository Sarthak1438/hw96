var firebaseConfig = {
    apiKey: "AIzaSyCQFUzZDjJ06osQA_NR8RdmqPQaDfd2ZE4",
    authDomain: "projectc93-844fa.firebaseapp.com",
    databaseURL: "https://projectc93-844fa-default-rtdb.firebaseio.com",
    projectId: "projectc93-844fa",
    storageBucket: "projectc93-844fa.appspot.com",
    messagingSenderId: "812262660144",
    appId: "1:812262660144:web:7ad34241da41c0ed9ab5f5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
      like:0
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}