const regexTime =
  /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.(\d{3}[+-](0[0-9]|1[0-4]):[0-5][0-9])|Z)$/;

const actualDate = new Date();

const btt = document.querySelector("#button");

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const getDate = () => {
  let date = document.querySelector("#text").value;
  const res = document.querySelector(".res");
  let ok = regexTime.exec(date);
  $ = res.style;

  if (ok) {
    let inputDate = new Date(date);
    let dif = Math.abs(actualDate - inputDate) / 1000;
    $.color = "#06D6A0";
    $.fontSize = "22px";
    $.fontWeight = "bold";

    res.innerHTML = `
    Days: ${formatNumber(Math.floor(dif / (3600 * 24)))} <br>
    Hours: ${Math.floor((dif % (3600 * 24)) / 3600)}\n <br>
    Minutes: ${Math.floor((dif % 3600) / 60)}\n <br>
    Seconds: ${Math.floor(dif % 60)} <br> 
    `;
  } else {
    $.color = "#EF476F";
    $.fontSize = "22px";
    $.fontWeight = "bold";

    res.innerHTML = `Invalid time`;
  }
};

btt.addEventListener("click", getDate);

console.log(btt);
