
let result = "";
let text = "";

//Clear Input fields
function scoobyClear() {
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#scooby").value = "";
}

//Executes when the Scooby Button is Click
const scoobyClick = () => {
  text = document.querySelector("#scooby").value;
  if (text == "") {
    alert("Please Write a text to Scooby doo")
  } else {
    document.querySelector("#result").innerHTML = scoobyLoop();
  }
}

//Loops through the string gotten from the input field and scobbys each word using the function scoobySnack
const scoobyLoop = () => {
  //Splits the string into an array
  let newText = text.split(" ");
  let scooby = [];
  //loopss through each array, applying the scoobySnack function on each element
  for (let i=0; i<newText.length; i++) {
    textBox=newText[i];
    scooby.push(scoobySnack(textBox));
  }
  let scoobyText  = scooby.join(" ");
  return scoobyText;
}

//Takes in a single word as an arguement and Scoobys it
const scoobySnack = (textBox) => {
  let scoobyVowel = /[a|e|i|o|u]/i;
  let limiter;
  for (let i=0; i<textBox.length; i++){
    if(scoobyVowel.exec(textBox[i])){
      limiter = i;
      var newStr = "r" + textBox.slice(limiter);
      break;
    } else {
      newStr = textBox;
    }
  }
  return newStr;
}
