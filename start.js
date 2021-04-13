console.log(3 == "3");
console.log(3 === "3");
// console.log(3 = "3");

// theres a difference. The loose comparison returns true, but the strick comparison checks for type and returns false.
// We should generally use the strick comparison ===
// if we use `=` it creates an error

const var1 = true

console.log(var1 ? false : true);

//Stacey