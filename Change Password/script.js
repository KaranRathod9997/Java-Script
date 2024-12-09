let password = "Karan@123";
let dafult_pass = document.getElementById("cpass");
dafult_pass.innerText = password;

const curpass = document.getElementById("curpass");
const newpass = document.getElementById("newpass");
const newpass1 = document.getElementById("newpass1");
const messageDiv = document.getElementById("message");
const passwordNotice = document.getElementById("passwordNotice");

function checkPasswordLength() {
  if (newpass.value.length < 4 || newpass.value.length > 9) {
    passwordNotice.style.color = 'red';
    passwordNotice.style.display = 'block';
  } else {
    passwordNotice.style.display = 'none';
  }
}

function ChangePassword() {
  messageDiv.classList.remove("success", "error");
  messageDiv.innerText = "";

  if (curpass.value === password) {
    if (newpass.value === newpass1.value) {
      if (newpass.value.length < 4) {
        messageDiv.classList.add("error");
        messageDiv.innerText = "Your new password is too short. It should be at least 4 characters.";
      } else if (newpass.value.length > 9) {
        messageDiv.classList.add("error");
        messageDiv.innerText = "Your new password is too long. It should be no more than 9 characters.";
      } else {
        messageDiv.classList.add("success");
        messageDiv.innerText = "Your password has been changed successfully.";
        dafult_pass.innerText = newpass.value;
        // Clear input fields after successful change
        curpass.value = "";
        newpass.value = "";
        newpass1.value = "";
      }
    } else {
      messageDiv.classList.add("error");
      messageDiv.innerText = "Your new passwords do not match.";
    }
  } else {
    messageDiv.classList.add("error");
    messageDiv.innerText = "Your current password is incorrect.";
  }
}

