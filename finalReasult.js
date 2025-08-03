/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var eachAssets = area / 2;
console.log(eachAssets);

/** Problem -02 ( Cycle or Laptop ) */
var money = 1000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4;
//write your code here

for (var days = 1; days <= lastDay; days++) {
  if (days % 3 === 0) {
    console.log(days + "- medicine");
  } else {
    console.log(days + "- rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "docx.xpdf";
//write your code here

if (fileName.startsWith("#")) {
  console.log("Store");
} else if (fileName.endsWith(".pdf")) {
  console.log("Store");
} else if (fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here

var Email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(Email);
