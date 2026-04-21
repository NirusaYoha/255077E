//form validation
function validateForm() {

let fullname = document.getElementById("fullname").value.trim();
let email = document.getElementById("email").value.trim();
let subject = document.getElementById("subject").value.trim();
let message = document.getElementById("message").value.trim();

if (fullname === "" || email === "" || subject === "" || message === "") {
    // show error
    document.getElementById("error-msg").style.display = "block";
    document.getElementById("success-msg").style.display = "none";
} else {
    document.getElementById("success-msg").style.display = "block";
    document.getElementById("error-msg").style.display = "none";
    document.getElementById("contactForm").reset();
}
} 



