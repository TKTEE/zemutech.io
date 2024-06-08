const firebaseConfig = {
    apiKey: "AIzaSyAWScF8lDgxMjiFJbrY_XX3keRSmlYG6x4",
    authDomain: "zemutechnologies-9eb10.firebaseapp.com",
    databaseURL: "https://zemutechnologies-9eb10-default-rtdb.firebaseio.com",
    projectId: "zemutechnologies-9eb10",
    storageBucket: "zemutechnologies-9eb10.appspot.com",
    messagingSenderId: "333066007188",
    appId: "1:333066007188:web:792af909eddfbe25a87a81",
    measurementId: "G-GY427863W7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const contactFormDB = firebase.database().ref("zemutech");

// Add event listener to the form
document.getElementById('zemutech').addEventListener("submit", submitForm);
document.getElementById('signIn').addEventListener("submit", signInForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var password = getElementVal('password');
    
    // Create a new user with email and password
    firebase.auth().createUserWithEmailAndPassword(emailid, password)
        .then((userCredential) => {
            // Signed up successfully
            var user = userCredential.user;
            saveMessage(name, emailid, password, () => {
                alert("User signed up successfully!");
                window.location.href = "index.html"; // Redirect to home page on successful sign-up
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage); // Show alert with the error message
        });
}

function signInForm(e) {
    e.preventDefault();
    var emailid = getElementVal('signinEmail');
    var password = getElementVal('signinPassword');
    
    // Sign in existing user
    firebase.auth().signInWithEmailAndPassword(emailid, password)
        .then((userCredential) => {
            // Signed in successfully
            var user = userCredential.user;
            alert("User signed in successfully!");
            window.location.href = "index.html"; // Redirect to home page on successful sign-in
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage); // Show alert with the error message
        });
}

const saveMessage = (name, emailid, password, callback) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        password: password,
    }, (error) => {
        if (error) {
            console.error("Error saving message: ", error);
        } else {
            callback();
        }
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const user = auth.currentUser;
    const userProfilePicture = user.photoUrl;
    console.log(userEmail)

    document.getElementById("username").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userprofilePicture").textContent = userprofilePicture;
}

updateUserProfile()

onAuthStateChanged(auth, (user) => {
    if(user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        alert("Create Account and login");
    }
});