const config = {
  apiKey: "AIzaSyAXje3ztxorvM73LYVy72EgjScC-leZwS0",
  authDomain: "bookstore-library.firebaseapp.com",
  projectId: "bookstore-library",
  storageBucket: "bookstore-library.appspot.com",
  messagingSenderId: "170904053822",
  appId: "1:170904053822:web:a237db1616d9b4c128496f",
};
firebase.initializeApp(config);
function datavalidation() {
  firebase
    .database()
    .ref("User")
    .set({
      Username: document.getElementById("username").value,
      Email_Address: document.getElementById("email").value,
      Password: document.getElementById("password").value,
    });
}

console.log(firebase);
const firestore = firebase.firestore();
/*
  var userfirstname = document.registration.firstname;
  var useremail = document.registration.email;
  var userPassword = document.registration.password;

  if (allLetter(userfirstname)) {
    if (ValidateEmail(useremail)) {
      if (passid_validation(userPassword, 7, 12)) {
      }
    }
  }
  return false;
}

function passid_validation(userPassword, mx, my) {
  var passid_len = userPassword.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    userPassword.focus();
    return false;
  }
  return true;
}
function allLetter(userfirstname) {
  var letters = /^[A-Za-z]+$/;
  if (userfirstname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    userfirstname.focus();
    return false;
  }
}

function ValidateEmail(useremail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (useremail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    useremail.focus();
    return false;
  }
}
 */
