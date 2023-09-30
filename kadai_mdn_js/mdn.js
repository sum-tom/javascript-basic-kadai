const date = new Date();
const [month, day, year] = [
  date.getUTCMonth()+1,
  date.getUTCDate(),
  date.getUTCFullYear(),
];
console.log(year +"年",month+"月", day+"日");