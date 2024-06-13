function calc() {
  let a = parseFloat(prompt("Enter the value of the first number:"));
  let b = parseFloat(prompt("Enter the value of the second number:"));

  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    } else {
      return a / b;
    }
  }

  function mod(a, b) {
    return a % b;
  }

  let operation = prompt("Select your operation: +, -, *, /, %");

  let result;

  if (operation === "+") {
    result = add(a, b);
  } else if (operation === "-") {
    result = sub(a, b);
  } else if (operation === "*") {
    result = mul(a, b);
  } else if (operation === "/") {
    result = div(a, b);
  } else if (operation === "%") {
    result = mod(a, b);
  } else {
    alert("Invalid operation");
    return;
  }

  if (result === "Cannot divide by zero") {
    document.getElementById("calculation").innerHTML = result;
  } else {
    console.log(result);
    document.getElementById("calculation").innerHTML =
      "Your answer is: " + result;
  }
}
