let a = [2, 3, 7, 4, 8, 567, 64];

let find = a.findIndex((value) => value % 2 == 0);
if (find) {
  console.log("All Number Are Even");
} else {
  console.log("All Number Are Not Even");
}

let every = a.every((value) => value % 2 == 0);
if (every) {
  console.log("All Number Are Even");
} else {
  console.log("All Number Are Not Even");
}

let some = a.some((value) => value % 2 == 0);
if (some) {
  console.log("All Number Are Even");
} else {
  console.log("All Number Are Not Even");
}
