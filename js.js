var money = parseInt(localStorage.getItem('money'));
if(localStorage.getItem('money') == null ) {
  let zusatz;
  if(localStorage.getItem('lastMoney') != null) {
    zusatz = '\nLetzter Kontostand: ' + localStorage.getItem('lastMoney');
  } else {
    zusatz = "";
  }
    var money = parseInt(prompt("Bitte hier Start-Kontostand eingeben" + zusatz));
    while(!(money > -1)){
      money = parseInt(prompt("Bitte hier Start-Kontostand eingeben" + zusatz));
    }
  localStorage.setItem('money', money);
}
document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");

let newest = 0;

const fileInput = document.getElementById("input-file");
fileInput.addEventListener("input", async (evt) => {
  const [ file ] = fileInput.files;

  const text = await file.text();

  const lines = text.split(/\r?\n/);

    newest++;
    const newBox = document.createElement("div");
    const innerBox = document.createElement("div");
    const newBoxLohn = document.createElement("a");
    const newBoxStart = document.createElement("a");
    const newBoxZiel = document.createElement("a");
    const submitBtn = document.createElement("button");
    const lohnNum = document.createElement("input");
    const lohnTxt = document.createElement("p");
    const ausgNum = document.createElement("input");
    const ausgTxt = document.createElement("p");
    lohnTxt.classList.add("lohnTxt");
    lohnTxt.innerHTML = "LOHN";
    ausgTxt.classList.add("ausgTxt");
    ausgTxt.innerHTML = "AUSGABEN";
    lohnNum.type = "number";
    lohnNum.value = 0;
    lohnNum.classList.add("lohnNum");
    lohnNum.id = 'lohnNum' + newest;
    ausgNum.type = "number";
    ausgNum.value = 0;
    ausgNum.classList.add("ausgNum");
    ausgNum.id = 'ausgNum' + newest;
    submitBtn.classList.add("submitBtn");
    submitBtn.id = newest;
    submitBtn.innerHTML = "Bestätigen";

    newBoxStart.innerHTML = "🛫" + lines[0];
    newBoxZiel.innerHTML = "🏁" + lines[1];
    innerBox.id = "innerBox";

    newBox.id = 'lohn' + newest;
    newBox.classList.add("lohn");
    innerBox.appendChild(newBoxStart);
    innerBox.appendChild(newBoxZiel);
    newBox.appendChild(innerBox);
    newBox.appendChild(lohnNum);
    newBox.appendChild(ausgNum);
    newBox.appendChild(lohnTxt);
    newBox.appendChild(ausgTxt);
    newBox.appendChild(submitBtn);
    document.getElementById("boxes").appendChild(newBox);

    fileInput.value = null;
    activateButton();
});

function activateButton() {
  document.getElementById(1).onclick = function () {
    var i = 1;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(2).onclick = function () {
    var i = 2;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(3).onclick = function () {
    var i = 3;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  
  document.getElementById(4).onclick = function () {
    var i = 4;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  
  document.getElementById(5).onclick = function () {
    var i = 5;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  
  document.getElementById(6).onclick = function () {
    var i = 6;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(7).onclick = function () {
    var i = 7;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(8).onclick = function () {
    var i = 8;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(9).onclick = function () {
    var i = 9;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(10).onclick = function () {
    var i = 10;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(11).onclick = function () {
    var i = 11;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(12).onclick = function () {
    var i = 12;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(13).onclick = function () {
    var i = 13;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(14).onclick = function () {
    var i = 14;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(15).onclick = function () {
    var i = 15;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(16).onclick = function () {
    var i = 16;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(17).onclick = function () {
    var i = 17;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(18).onclick = function () {
    var i = 18;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(19).onclick = function () {
    var i = 19;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
  document.getElementById(20).onclick = function () {
    var i = 20;
    money = money + parseInt(document.getElementById('lohnNum' + i).value);
    money = money - parseInt(document.getElementById('ausgNum' + i).value);
    localStorage.setItem('money', money);
    document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
    document.getElementById('lohn' + i).classList.add("erledigt");
    document.getElementById(i).disabled = "disabled";
  }
}

// let lohns = new Array(0);
// let starts = new Array(0);
// let ziels = new Array(0);

// if(localStorage.getItem('lohns') != null) {
//   lohns = localStorage.getItem('lohns');
// }
// if(localStorage.getItem('starts') != null) {
//   starts = localStorage.getItem('starts');
// }
// if(localStorage.getItem('ziels') != null) {
//   ziels = localStorage.getItem('ziels');
// }

// for(var i = 0; i < starts.length; i++) {
//   if(lohns[i] == "undefined") {
//     i = lohns.length;
//   }
//   const newBox = document.createElement("div");
//   const innerBox = document.createElement("div");
//   const newBoxLohn = document.createElement("a");
//   const newBoxStart = document.createElement("a");
//   const newBoxZiel = document.createElement("a");
//   newBoxLohn.innerHTML = lohns[i] + " €";
//   newBoxStart.innerHTML = "🛫" + starts[i];
//   newBoxZiel.innerHTML = "🏁" + ziels[i];
//   innerBox.id = "innerBox";
//   newBox.id = "lohn" + i;
//   newBox.classList.add("lohn");
//   innerBox.appendChild(newBoxLohn);
//   innerBox.appendChild(newBoxStart);
//   innerBox.appendChild(newBoxZiel);
//   newBox.appendChild(innerBox);
//   document.getElementById("lohns").appendChild(newBox);
// }


document.getElementById("altAusgBtn").onclick = function () {
  if(parseInt(document.getElementById('altAusgNum').value) > 0) {
    money = money - parseInt(document.getElementById('altAusgNum').value);
  localStorage.setItem('money', money);
  document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
  document.getElementById('altAusgNum').value = null;
  kontoMenu = false;
  document.getElementById("kontoMenu").style.visibility = "hidden";
  }
}

let kontoMenu = false;
let auftrMenu = false;
let skip = false;

document.getElementById("konto").onclick = function () {
  if(kontoMenu) {
    document.getElementById("kontoMenu").style.visibility = "hidden";
    kontoMenu = false;
    skip = true;
  }
  if(!kontoMenu && !skip) {
    document.getElementById("kontoMenu").style.visibility = "visible";
    kontoMenu = true;
  }
  skip = false;
}

document.getElementById("logo").onclick = function () {
  if(auftrMenu) {
    document.getElementById("auftrMenu").style.visibility = "hidden";
    auftrMenu = false;
    skip = true;
  }
  if(!auftrMenu && !skip) {
    document.getElementById("auftrMenu").style.visibility = "visible";
    auftrMenu = true;
  }
  skip = false;
}

document.getElementById("auftrBtn").onclick = function () {
  if(parseInt(document.getElementById('auftrLohn').value) > -1) {
    if(parseInt(document.getElementById('auftrAusg').value) > -1) {
      money = money + parseInt(document.getElementById('auftrLohn').value);
      money = money - parseInt(document.getElementById('auftrAusg').value);
      localStorage.setItem('money', money);
      document.getElementById("kontoStand").innerHTML = money.toLocaleString("en-US");
      document.getElementById('altAusgNum').value = null;
      auftrMenu = false;
      document.getElementById("auftrMenu").style.visibility = "hidden";

      const newBox = document.createElement("div");
      const innerBox = document.createElement("div");
      const newBoxLohn = document.createElement("a");
      const newBoxStart = document.createElement("a");
      const newBoxZiel = document.createElement("a");
      const submitBtn = document.createElement("button");
      const lohnNum = document.createElement("input");
      const lohnTxt = document.createElement("p");
      const ausgNum = document.createElement("input");
      const ausgTxt = document.createElement("p");
      const resNum = document.createElement("input");
      lohnTxt.classList.add("lohnTxt");
      lohnTxt.innerHTML = "LOHN";
      ausgTxt.classList.add("ausgTxt");
      ausgTxt.innerHTML = "AUSGABEN";
      lohnNum.type = "text";
      lohnNum.disabled = "disabled";
      lohnNum.value = parseInt(document.getElementById("auftrLohn").value) + ' €';
      lohnNum.classList.add("aufrtlohnNum");
      lohnNum.id = 'lohnNum' + newest;
      ausgNum.type = "text";
      ausgNum.disabled = "disabled";
      ausgNum.value = '-' + parseInt(document.getElementById("auftrAusg").value) + ' €';
      ausgNum.classList.add("aufrtAusgNum");
      resNum.type = "text";
      resNum.disabled = "disabled";
      resNum.value = parseInt(document.getElementById("auftrLohn").value) - parseInt(document.getElementById("auftrAusg").value) + ' €';
      resNum.classList.add("aufrtresNum");

      innerBox.id = "innerBox";

      newBox.classList.add("lohn");
      newBox.classList.add("erledigt");
      // innerBox.appendChild(newBoxStart);
      // innerBox.appendChild(newBoxZiel);
      newBox.appendChild(innerBox);
      newBox.appendChild(lohnNum);
      newBox.appendChild(ausgNum);
      newBox.appendChild(resNum);
      // newBox.appendChild(lohnTxt);
      // newBox.appendChild(ausgTxt);
      document.getElementById("boxes").appendChild(newBox);

    }
  }
}

document.getElementById("resetBtn").onclick = function () {localStorage.setItem('lastMoney', money); localStorage.removeItem('money'); location.reload();}