var firebaseConfig = {
      apiKey: "AIzaSyD5-QUYtqlxusyV1-GMnAzGIthmAr6YpZk",
      authDomain: "test-aed32.firebaseapp.com",
      databaseURL: "https://test-aed32-default-rtdb.firebaseio.com",
      projectId: "test-aed32",
      storageBucket: "test-aed32.appspot.com",
      messagingSenderId: "929828875808",
      appId: "1:929828875808:web:a96ed1b270eeef05f69645"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
}
