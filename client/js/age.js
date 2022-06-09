let ageEL = document.getElementById("age");

var age, daysBetweenDates;
daysBetweenDates = function(d1, d2) {
  var diffDays, oneDay;
  oneDay = 24 * 60 * 60 * 1000;
  diffDays = (d2 - Date.parse(d1)) / oneDay;
  return diffDays;
};

setInterval(() => {
    ageEL.innerHTML = (daysBetweenDates('Jun 15, 2003 14:48:00', new Date()) / 365).toString().substring(0, 12);
});