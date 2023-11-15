function validateForm() {

    var validatName =
    document.getElementById("fname").value;
    if (validateName == "full name" ||
    validatName == "") {
        alert("fill in the blank area ");
    }
    var validateEmail =
    document.getElementById("email").value;
    if(validateEmail.includes("@") &&
    validateEmail.includes(".")){}
    else{alert("enter valid email")}

}