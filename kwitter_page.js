var firebaseConfig = {
      apiKey: "AIzaSyArWF9NS--N3LMWrOJfPu5NhMw-smLttOg",
      authDomain: "kwitter-app-13a86.firebaseapp.com",
      databaseURL: "https://kwitter-app-13a86-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-13a86",
      storageBucket: "kwitter-app-13a86.appspot.com",
      messagingSenderId: "159862898448",
      appId: "1:159862898448:web:5921f90a1eb33052736f95"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            messsage: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
