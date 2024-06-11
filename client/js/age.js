let ageEL = document.getElementById("age");

function isLeapYear(year) {
    var d = new Date(year, 1, 28);
    d.setDate(d.getDate() + 1);
    return d.getMonth() == 1;
}

function getAge(date) {
    var d = new Date(date), now = new Date();
    var years = now.getFullYear() - d.getFullYear();
    d.setFullYear(d.getFullYear() + years);
    if (d > now) {
        years--;
        d.setFullYear(d.getFullYear() - 1);
    }
    var days = (now.getTime() - d.getTime()) / (3600 * 24 * 1000);
    return years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
}

setInterval(() => {
    ageEL.innerHTML = (getAge('Jun 12, 2003')).toString().substring(0, 12);
});