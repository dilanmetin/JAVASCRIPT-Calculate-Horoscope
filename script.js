var burclar = [
  "Koç",
  "Boğa",
  "İkizler",
  "Yengeç",
  "Aslan",
  "Başak",
  "Terazi",
  "Akrep",
  "Yay",
  "Oğlak",
  "Kova",
  "Balık",
];

function allValue(select) {
  var day = document.getElementById("day");
  var dayValue = day.options[day.selectedIndex].text;

  var month = document.getElementById("month");
  var monthValue = month.options[month.selectedIndex].value;

  var year = document.getElementById("year");
  var yearValue = year.options[year.selectedIndex].text;

  var hour = document.getElementById("hour");
  var hourValue = hour.options[hour.selectedIndex].value;

  var minute = document.getElementById("minute");
  var minuteValue = minute.options[minute.selectedIndex].text;

  var burc;
  var rising;

  document.querySelector("#calculate").addEventListener("click", sunSign);
  document.querySelector("#calculate").addEventListener("click", risingSign);

  function sunSign() {
    if (
      (monthValue == 2 && dayValue > 21) ||
      (monthValue == 3 && dayValue < 20)
    ) {
      burc = burclar[0];
    }
    if (
      (monthValue == 3 && dayValue > 21) ||
      (monthValue == 4 && dayValue < 20)
    ) {
      burc = burclar[1];
    }
    if (
      (monthValue == 4 && dayValue > 21) ||
      (monthValue == 5 && dayValue < 20)
    ) {
      burc = burclar[2];
    }
    if (
      (monthValue == 5 && dayValue > 21) ||
      (monthValue == 6 && dayValue < 22)
    ) {
      burc = burclar[3];
    }
    if (
      (monthValue == 6 && dayValue > 23) ||
      (monthValue == 7 && dayValue < 22)
    ) {
      burc = burclar[4];
    }
    if (
      (monthValue == 7 && dayValue > 23) ||
      (monthValue == 8 && dayValue < 22)
    ) {
      burc = burclar[5];
    }
    if (
      (monthValue == 8 && dayValue > 23) ||
      (monthValue == 9 && dayValue < 22)
    ) {
      burc = burclar[6];
    }
    if (
      (monthValue == 9 && dayValue > 23) ||
      (monthValue == 10 && dayValue < 22)
    ) {
      burc = burclar[7];
    }
    if (
      (monthValue == 10 && dayValue > 23) ||
      (monthValue == 11 && dayValue < 21)
    ) {
      burc = burclar[8];
    }
    if (
      (monthValue == 11 && dayValue > 22) ||
      (monthValue == 0 && dayValue < 19)
    ) {
      burc = burclar[9];
    }
    if (
      (monthValue == 0 && dayValue > 20) ||
      (monthValue == 1 && dayValue < 18)
    ) {
      burc = burclar[10];
    }
    if (
      (monthValue == 1 && dayValue > 19) ||
      (monthValue == 2 && dayValue < 20)
    ) {
      burc = burclar[11];
    }

    document.querySelector("#signCalculate").innerHTML = `Burcunuz: ${burc}`;
  }
  function risingSign() {
    if (hourValue >= 6 && hourValue < 8) {
      rising = burc;
    }
    if (hourValue >= 8 && hourValue < 10) {
      //burc dizideki index numarasını bul ve ona 1 ekle

      rising = burclar[burclar.indexOf(burc) + 1];

      // if (rising == undefined) {
      // burada dizinin en başına döndürmesi gerekiyor. (alttakilere de eklenmeli)
      // }
    }
    if (hourValue >= 10 && hourValue < 12) {
      //burc dizideki index numarasını bul ve ona 2 ekle
      rising = burclar[burclar.indexOf(burc) + 2];
    }
    if (hourValue >= 12 && hourValue < 14) {
      //burc dizideki index numarasını bul ve ona 3 ekle
      rising = burclar[burclar.indexOf(burc) + 3];
    }
    if (hourValue >= 14 && hourValue < 16) {
      //burc dizideki index numarasını bul ve ona 4 ekle
      rising = burclar[burclar.indexOf(burc) + 4];
    }
    if (hourValue >= 16 && hourValue < 18) {
      //burc dizideki index numarasını bul ve ona 5 ekle
      rising = burclar[burclar.indexOf(burc) + 5];
    }
    if (hourValue >= 18 && hourValue < 20) {
      //burc dizideki index numarasını bul ve ona 6 ekle
      rising = burclar[burclar.indexOf(burc) + 6];
    }
    if (hourValue >= 20 && hourValue < 22) {
      //burc dizideki index numarasını bul ve ona 7 ekle
      rising = burclar[burclar.indexOf(burc) + 7];
    }
    if (hourValue >= 22 && hourValue <= 23) {
      //burc dizideki index numarasını bul ve ona 8 ekle
      rising = burclar[burclar.indexOf(burc) + 8];
    }
    if (hourValue >= 0 && hourValue < 2) {
      //burc dizideki index numarasını bul ve ona 9 ekle
      rising = burclar[burclar.indexOf(burc) + 9];
    }
    if (hourValue >= 2 && hourValue < 4) {
      //burc dizideki index numarasını bul ve ona 10 ekle
      rising = burclar[burclar.indexOf(burc) + 10];
    }
    if (hourValue >= 4 && hourValue < 6) {
      //burc dizideki index numarasını bul ve ona 11 ekle
      rising = burclar[burclar.indexOf(burc) + 11];
    }

    document.querySelector(
      "#risingCalculate"
    ).innerHTML = `Yükselen Burcunuz: ${rising}`;
  }
}

