// Function To Calculate The Area Of Rectangle

function rect() {
  let a = prompt("Enter Length Of Your Rectangle :");
  let b = prompt("Enter Width Of Your Rectangle :");

  function rectangle(a, b) {
    if (a >= 0 && b >= 0) {
      let ans;
      ans = a * b;
      console.log(ans);
      return ans;
    } else {
      return alert("Length & Width must be possitive Numbers.");
    }
  }

  document.getElementById("start").innerText =
    "Area Of Rectangle is :" + rectangle(a, b);
}

// Function To Calculate The Area Of Triangle

function trin() {
  let a = prompt("Enter Base Of Your Triangle :");
  let b = prompt("Enter Height Of Your Triangle :");

  function Triangle(a, b) {
    if (a >= 0 && b >= 0) {
      let ans;
      ans = 0.5 * a * b;
      console.log(ans);
      return ans;
    } else {
      return alert("Base & Height must be possitive Numbers.");
    }
  }

  document.getElementById("stop").innerText =
    "Area Of Triangle is :" + Triangle(a, b);
}

// Function To Calculate The Area Of Circle

function circ() {
  let r = prompt("Enter Radius Of Your circle :");

  function circle(r) {
    if (r >= 0) {
      let ans;
      ans = Math.PI * r * r;
      console.log(ans);
      return ans;
    } else {
      return alert("Radius must be possitive Numbers.");
    }
  }

  document.getElementById("end").innerText = "Area Of circle is :" + circle(r);
}
