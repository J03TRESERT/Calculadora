let numberselect = 0,
  numbscreen = document.getElementById("number-screen"),
  operator = "",
  numberswrites = "",
  numberswrites2 = "";

let numbers = document.querySelectorAll("#numb-btn").forEach((numbbtn) => {
  numbbtn.addEventListener("click", () => {
    numberselect = Number(numbbtn.textContent);
    if (numbscreen.value <= 0) {
      numbscreen.value = "";
    }
    numbscreen.value += numberselect;
    if (operator == "") numberswrites += numberselect;
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
      numberswrites2 += numberselect;
    }
  });
});

let operbtn = document.querySelectorAll("#oper-simb").forEach((operbtn) => {
  operbtn.addEventListener("click", () => {
    if ((operator == "+" && numberswrites2 == "") || (operator == "-" && numberswrites2 == "") || (operator == "*" && numberswrites2 == "") || (operator == "/" && numberswrites2 == "")) numbscreen.value = numbscreen.value.slice(0, -1);
    operator = operbtn.textContent;
    numbscreen.value += operator;
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
    numbscreen.value = suma();
    numberswrites = `${suma()}`;
  }
  if (operator == "-") {
    numbscreen.value = resta();
    numberswrites = `${resta()}`;
  }
  if (operator == "*") {
    numbscreen.value = mltp();
    numberswrites = `${mltp()}`;
  }
  if (operator == "/") {
    numbscreen.value = dvd();
    numberswrites = `${dvd()}`;
  }
  numberswrites2 = "";
  countnumberscreen = 0;
  operator = "";
});

let operbtnreset = document.getElementById("oper-btn-reset");
operbtnreset.addEventListener("click", () => {
  numbscreen.value = 0;
  countnumberscreen = 0;
  numberswrites = "";
  operator = "";
  oprecioncache = 0;
});

let operbtndelet = document.getElementById("oper-btn-delet");
operbtndelet.addEventListener("click", () => {
  if (operator != "") {
    numberswrites2 = numberswrites2.slice(0, -1);
    numbscreen.value = numbscreen.value.slice(0, -1);
  } else {
    numberswrites = numberswrites.slice(0, -1);
    numbscreen.value = numbscreen.value.slice(0, -1);
  }
  if (numbscreen.value == "") numbscreen.value = 0;
});
