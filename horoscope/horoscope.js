//alert("up");
//swal("Hello I am up", "Good to go");

let day;
let month;
let horoscopes = ['leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricon', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer']

function onSubmit() {
  day = document.getElementById('day').value;
  month = document.getElementById('month').value;
  console.log("day: " + day);
  console.log("month: " + month);
}

function yourHoroscope (day, month) {
  let sign;
  switch (month) {
      case 1:
        if (day < 20) {
          sign =  'capricon';
        } else {
          sign = 'aquarus';
        }

      case 2:
        if (day < 19) {
          sign =  'aquarus';
        } else {
          sign = 'pisces';
        }

      case 3:
        if (day < 21) {
          sign =  'pisces';
        } else {
          sign = 'aries';
        }

      case 4:
        if (day < 20) {
          sign =  'aries';
        } else {
          sign = 'taaurus';
        }

      case 5:
        if (day < 20) {
          sign =  'taaurus';
        } else {
          sign = 'gemini';
        }

      case 6:
        if (day < 23) {
          sign =  'gemini';
        } else {
          sign = 'cancer';
        }

      case 7:
        if (day < 23) {
          sign =  'cancer';
        } else {
          sign = 'leo';
        }

      case 8:
        if (day < 23) {
          sign =  'leo';
        } else {
          sign = 'virgo';
        }

      case 9:
        if (day < 23) {
          sign =  'virgo';
        } else {
          sign = 'libra';
        }

      case 10:
        if (day < 23) {
          sign =  'libra';
        } else {
          sign = 'scorpio';
        }

      case 11:
        if (day < 22) {
          sign =  'scorpio';
        } else {
          sign = 'sagittarius';
        }

      case 12:
        if (day < 22) {
          sign =  'sagittarius';
        } else {
          sign = 'capricon';
        }
}

const clearBoxes = () => {
  dday = document.getElementById('day').value = "";
  month = document.getElementById('month').value = 0;
}
