let display = document.querySelector(".input");

display.value = "0";

function calculator(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function allclear() {
  display.value = "0";
}

function equal() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Invalid Input, Please Enter Valid Value.";
    display.style.color = "red";
  }
}
