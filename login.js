// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3p-Cyn9o8ex2fMXohSw086t1zxMX7q2Y",
    authDomain: "chat-page-5cad9.firebaseapp.com",
    databaseURL: "https://chat-page-5cad9-default-rtdb.firebaseio.com",
    projectId: "chat-page-5cad9",
    storageBucket: "chat-page-5cad9.appspot.com",
    messagingSenderId: "251723471374",
    appId: "1:251723471374:web:a7d5062e8c100a77e4fa5f"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function light()
{
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("welcome_h1").style.color = "black";
    document.getElementById("login_h2").style.color = "white";
    document.getElementById("light_button").style.backgroundColor = "black";
    document.getElementById("light_button").style.color = "white";
    document.getElementById("dark_button").style.backgroundColor = "black";
    document.getElementById("dark_button").style.color = "white";
    document.getElementById("login_div").style.backgroundColor = "black";

}

function dark()
{
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("welcome_h1").style.color = "white";
    document.getElementById("login_h2").style.color = "black";
    document.getElementById("dark_button").style.backgroundColor = "white";
    document.getElementById("dark_button").style.color = "black";
    document.getElementById("light_button").style.backgroundColor = "white";
    document.getElementById("light_button").style.color = "black";
    document.getElementById("login_div").style.backgroundColor = "white";
}

localStorage.setItem("login_input");

function login()
{
   if(document.getElementById("user_name").value == "")
   {
       document.getElementById("user_alert").style.visibility = "visible";

       setTimeout(() => {
        document.getElementById("user_alert").style.visibility = "hidden";
    }, 3000);
   }
   else{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
   
    
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user name"
    });
    window.location = "chat_page.html";
   }

}
