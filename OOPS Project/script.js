var user_arr = [];

class User {
  constructor(name, age, gender, email, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
  }
}
const form = document.getElementById("userform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = document.getElementsByName("name")[0].value;
  const age = document.getElementsByName("age")[0].value;
  const gender = document.getElementsByName("gender")[0].value;
  const mail = document.getElementsByName("email")[0].value;
  const phone = document.getElementsByName("phone")[0].value;

  user_arr.push(new User(formData, age, gender, mail, phone));
  console.log(user_arr);

  const dataList = document.getElementById("dataList");
  dataList.innerHTML = user_arr
    .map(
      (user) =>
        `<p>Name: ${user.name} , Age: ${user.age} , Gender: ${user.gender} , Email: ${user.email} , phone: ${user.phone}</p>`
    )
    .join("");
});
