/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

var salaryOfNow = startingSalary;
for (var i = 0; i < experience; i++) {
  salaryOfNow += salaryOfNow * 0.05;
}

console.log(salaryOfNow.toFixed(2));
