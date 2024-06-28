let a = [1, 3, 5, 7, 9];

a.forEach(function (value) {
  if (value % 2 == 0) {
    console.log(value + " Even");
  } else {
    console.log(value + " Odd");
  }
});
