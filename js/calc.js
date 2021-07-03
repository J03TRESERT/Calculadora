let numberselect = 0,
  numbscreen = document.getElementById("number-screen"),
  numbscreenCache = document.getElementById("number-screen-cache"),
  operator = "",
  numberswrites = "",
  numberswrites2 = "";

let numbers = document.querySelectorAll("#numb-btn").forEach((numbbtn) => {
  numbbtn.addEventListener("click", () => {
    numberselect = Number(numbbtn.textContent);
    if (numbscreen.textContent <= "0") numbscreen.textContent = "";

    numbscreen.textContent += numberselect;
    if (operator == "") numberswrites += numberselect;
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
      numberswrites2 += numberselect;
    }
  });
});

let operbtn = document.querySelector(".operation-simbols");
operbtn.addEventListener("click", (e) => {
  if ((operator == "+" && numberswrites2 == "") || (operator == "-" && numberswrites2 == "") || (operator == "*" && numberswrites2 == "") || (operator == "/" && numberswrites2 == "")) numbscreen.textContent = numbscreen.textContent.slice(0, -1);
  if (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "/" || e.target.textContent == "*") operator = e.target.textContent;
  numbscreen.textContent += operator;
  numberswrites2 = "";
});

const suma = () => (result = Number(numberswrites) + Number(numberswrites2));
const resta = () => (resul = Number(numberswrites) - Number(numberswrites2));
const mltp = () => (resul = Number(numberswrites) * Number(numberswrites2));
const dvd = () => (resul = Number(numberswrites) / Number(numberswrites2));

let operatorequal = document.querySelector("#oper-simb-equal");
operatorequal.addEventListener("click", () => {
  numbscreenCache.textContent = "";
  if (operator == "+") numbscreenCache.textContent = suma();

  if (operator == "-") numbscreenCache.textContent = resta();

  if (operator == "*") numbscreenCache.textContent = mltp();

  if (operator == "/") numbscreenCache.textContent = dvd();

  if (numbscreenCache.textContent == "NaN") numbscreenCache.textContent = "Error";

  numbscreen.textContent = 0;
  numberswrites = "";
  numberswrites2 = "";
  countnumberscreen = 0;
  operator = "";
});

let operbtnreset = document.getElementById("oper-btn-reset");
operbtnreset.addEventListener("click", () => {
  numbscreen.textContent = 0;
  countnumberscreen = 0;
  numberswrites = "";
  operator = "";
  oprecioncache = 0;
});

let operbtndelet = document.getElementById("oper-btn-delet");
operbtndelet.addEventListener("click", () => {
  if (operator != "") {
    numberswrites2 = numberswrites2.slice(0, -1);
    numbscreen.textContent = numbscreen.textContent.slice(0, -1);
  } else {
    numberswrites = numberswrites.slice(0, -1);
    numbscreen.textContent = numbscreen.textContent.slice(0, -1);
  }
  if (numbscreen.textContent == "") numbscreen.textContent = 0;
});
