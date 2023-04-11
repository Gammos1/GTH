var money = parseInt(localStorage.getItem('money'));
if(parseInt(localStorage.getItem('money') == NaN)) {
  money = 0;
}
document.getElementById("money").innerHTML = money.toLocaleString("en-US");

const fileInput = document.getElementById("input-file");
fileInput.addEventListener("input", async (evt) => {
  const [ file ] = fileInput.files;

  const text = await file.text();

  const lines = text.split(/\r?\n/);
  document.getElementById("startText").innerHTML = lines[0];
  document.getElementById("zielText").innerHTML = lines[1];
  document.getElementById("newBox").style.visibility = "visible";
});

document.getElementById("submitButton").onclick = function () {
  money = money + parseInt(document.getElementById("lohn").value);
  money = money - parseInt(document.getElementById("ausgb").value);
  localStorage.setItem('money', money);
  console.log(money);
  console.log("newMoney");
  document.getElementById("money").innerHTML = money.toLocaleString("en-US");
  document.getElementById("newBox").style.visibility = "hidden";
  location.reload();
};

document.getElementById("resetBtn").onclick = function () {money = 0; localStorage.setItem('money', money); location.reload();}