var koc = "Koç";
var boga = "Boğa";
var ikizler = "İkizler";
var yengec = "Yengeç";
var aslan = "Aslan";
var basak = "Başak";
var terazi = "Terazi";
var akrep = "Akrep";
var yay = "Yay";
var oglak = "Oğlak";
var kova = "Kova";
var balik = "Balık";

function allValue(select) {
  var day = document.getElementById("day");
  var dayValue = day.options[day.selectedIndex].text;

  var month = document.getElementById("month");
  var monthValue = month.options[month.selectedIndex].value;

  var year = document.getElementById("year");
  var yearValue = year.options[year.selectedIndex].text;

  var hour = document.getElementById("hour");
  var hourValue = hour.options[hour.selectedIndex].text;

  var minute = document.getElementById("minute");
  var minuteValue = minute.options[minute.selectedIndex].text;
  var burc;

  document.querySelector("#calculate").addEventListener("click", sunSign);

  function sunSign() {
    if (
      (monthValue == 2 && dayValue > 21) ||
      (monthValue == 3 && dayValue < 20)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${koc}`;
    }
    if (
      (monthValue == 3 && dayValue > 21) ||
      (monthValue == 4 && dayValue < 20)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${boga}`;
    }
    if (
      (monthValue == 4 && dayValue > 21) ||
      (monthValue == 5 && dayValue < 20)
    ) {
      document.querySelector(
        "#signCalculate"
      ).innerHTML = `Burcunuz: ${ikizler}`;
    }
    if (
      (monthValue == 5 && dayValue > 21) ||
      (monthValue == 6 && dayValue < 22)
    ) {
      document.querySelector(
        "#signCalculate"
      ).innerHTML = `Burcunuz: ${yengec}`;
    }
    if (
      (monthValue == 6 && dayValue > 23) ||
      (monthValue == 7 && dayValue < 22)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${aslan}`;
    }
    if (
      (monthValue == 7 && dayValue > 23) ||
      (monthValue == 8 && dayValue < 22)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${basak}`;
    }
    if (
      (monthValue == 8 && dayValue > 23) ||
      (monthValue == 9 && dayValue < 22)
    ) {
      document.querySelector(
        "#signCalculate"
      ).innerHTML = `Burcunuz: ${terazi}`;
    }
    if (
      (monthValue == 9 && dayValue > 23) ||
      (monthValue == 10 && dayValue < 22)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${akrep}`;
    }
    if (
      (monthValue == 10 && dayValue > 23) ||
      (monthValue == 11 && dayValue < 21)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${yay}`;
    }
    if (
      (monthValue == 11 && dayValue > 22) ||
      (monthValue == 0 && dayValue < 19)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${oglak}`;
    }
    if (
      (monthValue == 0 && dayValue > 20) ||
      (monthValue == 1 && dayValue < 18)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${kova}`;
    }
    if (
      (monthValue == 1 && dayValue > 19) ||
      (monthValue == 2 && dayValue < 20)
    ) {
      document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${balik}`;
    }
  }
}
