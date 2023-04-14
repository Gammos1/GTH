// var money = parseInt(localStorage.getItem('money'));
// if(parseInt(localStorage.getItem('money') == NaN)) {
//   money = 0;
// }
// document.getElementById("money").innerHTML = money.toLocaleString("en-US");

let lohns = new Array(0);
let starts = new Array(0);
let ziels = new Array(0);

if(localStorage.getItem('lohns') != null) {
  lohns = localStorage.getItem('lohns');
}
if(localStorage.getItem('starts') != null) {
  starts = localStorage.getItem('starts');
}
if(localStorage.getItem('ziels') != null) {
  ziels = localStorage.getItem('ziels');
}

for(var i = 0; i < starts.length; i++) {
  if(lohns[i] == "undefined") {
    i = lohns.length;
  }
  const newBox = document.createElement("div");
  const innerBox = document.createElement("div");
  const newBoxLohn = document.createElement("a");
  const newBoxStart = document.createElement("a");
  const newBoxZiel = document.createElement("a");
  newBoxLohn.innerHTML = lohns[i] + " €";
  newBoxStart.innerHTML = "🛫" + starts[i];
  newBoxZiel.innerHTML = "🏁" + ziels[i];
  innerBox.id = "innerBox";
  newBox.id = "lohn" + i;
  newBox.classList.add("lohn");
  innerBox.appendChild(newBoxLohn);
  innerBox.appendChild(newBoxStart);
  innerBox.appendChild(newBoxZiel);
  newBox.appendChild(innerBox);
  document.getElementById("lohns").appendChild(newBox);
}

const fileInput = document.getElementById("input-file");
fileInput.addEventListener("input", async (evt) => {
  const [ file ] = fileInput.files;

  const text = await file.text();

  const lines = text.split(/\r?\n/);

  starts.push(lines[0]);

  localStorage.setItem('lohns', lohns);
  localStorage.setItem('ziels', ziels);

  console.log(lohns);
  console.log(ziels);

  location.reload();
  console.log("reload");

  // document.getElementById("startText").innerHTML = lines[0];
  // document.getElementById("zielText").innerHTML = lines[1];
  // document.getElementById("newBox").style.visibility = "visible";
});

// document.getElementById("submitButton").onclick = function () {
//   money = money + parseInt(document.getElementById("lohn").value);
//   money = money - parseInt(document.getElementById("ausgb").value);
//   localStorage.setItem('money', money);
//   console.log(money);
//   console.log("newMoney");
//   document.getElementById("money").innerHTML = money.toLocaleString("en-US");
//   document.getElementById("newBox").style.visibility = "hidden";
//   location.reload();
// };

// document.getElementById("resetBtn").onclick = function () {money = 0; localStorage.setItem('money', money); location.reload();}

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("moreBoxes");
// element.appendChild(para);