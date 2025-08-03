/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for (var days = 1; days <= lastDay; days++) {
  if (days % 3 === 0) {
    console.log(days + "- medicine");
  } else {
    console.log(days + "- rest");
  }
}
