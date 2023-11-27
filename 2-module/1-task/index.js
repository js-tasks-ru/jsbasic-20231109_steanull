function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    if (!isNaN(parseFloat(salaries[salary])) && isFinite(salaries[salary]) && typeof (salaries[salary]) !== 'boolean') {
      sum += salaries[salary];
    }
  }
  return sum;
}
