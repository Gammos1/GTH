var money = 0;
document.getElementById("money").innerHTML = money;

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
  localStorage.setItem('money', money);
  console.log(money);
  console.log("newMoney");
  document.getElementById("money").innerHTML = money;
  document.getElementById("newBox").style.visibility = "hidden";
  location.reload();
};