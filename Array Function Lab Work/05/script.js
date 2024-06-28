let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

function pet(obj, current) {
  if (obj[current]) {
    obj[current] = obj[current] + 1;
  } else {
    obj[current] = 1;
  }
  return obj;
}

let petcount = pets.reduce(pet, {});
console.log(petcount);
