let numberselect = 0,
  numbscreen = document.getElementById("number-screen"),
  operator = "",
  numberswrites = "",
  numberswrites2 = "";

let numbers = document.querySelectorAll("#numb-btn").forEach((numbbtn) => {
  numbbtn.addEventListener("click", () => {
    numberselect = Number(numbbtn.textContent);
    if (numbscreen.textContent <= "0") {
      numbscreen.textContent = "";
    }
    numbscreen.textContent += numberselect;
    if (operator == "") numberswrites += numberselect;
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
      numberswrites2 += numberselect;
    }
  });
});

let operbtn = document.querySelectorAll("#oper-simb").forEach((operbtn) => {
  operbtn.addEventListener("click", () => {
    if ((operator == "+" && numberswrites2 == "") || (operator == "-" && numberswrites2 == "") || (operator == "*" && numberswrites2 == "") || (operator == "/" && numberswrites2 == "")) numbscreen.textContent = numbscreen.textContent.slice(0, -1);
    operator = operbtn.textContent;
    numbscreen.textContent += operator;
    numberswrites2 = "";
  });
});

const suma = () => {
  let resul = Number(numberswrites) + Number(numberswrites2);
  return resul;
};
const resta = () => {
  let resul = Number(numberswrites) - Number(numberswrites2);
  return resul;
};
const mltp = () => {
  let resul = Number(numberswrites) * Number(numberswrites2);
  return resul;
};
const dvd = () => {
  let resul = Number(numberswrites) / Number(numberswrites2);
  return resul;
};

let operatorequal = document.querySelector("#oper-simb-equal");
operatorequal.addEventListener("click", () => {
  if (operator == "+") {
    numbscreen.textContent = suma();
    numberswrites = `${suma()}`;
  }
  if (operator == "-") {
    numbscreen.textContent = resta();
    numberswrites = `${resta()}`;
  }
  if (operator == "*") {
    numbscreen.textContent = mltp();
    numberswrites = `${mltp()}`;
  }
  if (operator == "/") {
    numbscreen.textContent = dvd();
    numberswrites = `${dvd()}`;
  }
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
