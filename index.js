const userPassword = document.getElementById("user-password")
const userConfirm = document.getElementById("user-confirm")


function checkPassword(){
    let message = document.getElementById("password-validation")

    if (userPassword.value !== userConfirm.value) {
        message.textContent = "Passwords do not match!"
    } else {
        message.textContent = ""
    }
}




userPassword.addEventListener('blur', checkPassword);
userConfirm.addEventListener('blur', checkPassword);