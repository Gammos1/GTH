var money = localStorage.getItem('money');
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
  localStorage.setItem('money', document.getElementById("lohn").value);
  console.log(document.getElementById("lohn").value);
  console.log("ye");
  document.getElementById("money").innerHTML = money;
};