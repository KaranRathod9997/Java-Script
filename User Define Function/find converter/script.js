//  meter to feet

function meter() {
  let m = prompt("Enter Number Of Meter :");

  function meeter() {
    if (m >= 0) {
      let feet = m * 3.2808;
      return feet;
    } else {
      return "Invalid Input";
    }
  }

  document.getElementById("feet").innerText = "Meter To Feet Is :" + meeter();
}

// feet to meter

function Feet() {
  let f = prompt("Enter Number Of Feet :");

  function Feeet() {
    if (f >= 0) {
      let m = f / 3.2808;
      return m;
    } else {
      return "Invalid Input";
    }
  }

  document.getElementById("meter").innerText = "Meter To Feet Is :" + Feeet();
}

//  Celsius to Fahrenheit

function celsius() {
  let celsius = prompt("Enter Value Of celsius:");

  function cels(celsius) {
    if (celsius >= 0) {
      let fahrenheit = (celsius * 9) / 5 + 32;
      console.log(fahrenheit);
      return fahrenheit;
    } else {
      alert("Number must be possivate.");
    }
  }
  document.getElementById("fahrenheit").innerText =
    " Celsius to Fahrenheit is :" + cels(celsius);
}

//  Fahrenheit to celsius

function fahrenheit() {
  let f = prompt("Enter Value Of Fahrenheit:");

  function cels() {
    if (f >= 0) {
      fahrenheit = ((f - 32) * 5) / 9;
      console.log(fahrenheit);
      return fahrenheit;
    } else {
      alert("Number must be possivate.");
    }
  }
  document.getElementById("celsius").innerText =
    " Celsius to Fahrenheit is :" + cels(celsius);
}

//  doller to ruppes

function doller() {
  let d = prompt("Enter doller:");

  function dol(d) {
    if (d >= 0) {
      let r = d * 83.5822;
      console.log(r);
      return r;
    } else {
      alert("Number must be possivate.");
    }
  }
  document.getElementById("rupees").innerText =
    "  Dollar to Rupees is :" + dol(d);
}

//  ruppes to doller

function ruppes() {
  let d = prompt("Enter rupees:");

  function dol(d) {
    if (d >= 0) {
      let r = d / 83.5822;
      console.log(r);
      return r;
    } else {
      alert("Number must be possivate.");
    }
  }
  document.getElementById("doller").innerText =
    "  ruppes to doller is :" + dol(d);
}
