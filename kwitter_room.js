
// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room name - " + room_name);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
