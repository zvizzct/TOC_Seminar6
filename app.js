const regexTime =
  /((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})[.Z](\d{3}\+\d{2}:\d{2})?)$/;

const actualDate = new Date();

const btt = document.querySelector("#button");

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

const getDate = () => {
  let date = document.querySelector("#text").value;
  const res = document.querySelector(".res");
  let ok = regexTime.exec(date);
  $ = res.style;

  if (ok) {
    let inputDate = new Date(date);
    let dif = Math.abs(actualDate - inputDate) / 1000;
    $.color = "#06D6A0";
    $.textAlign = "justify";
    $.fontSize = "22px";
    $.fontWeight = "bold";

    res.innerHTML = `Seconds: ${Math.floor(dif % 60)} <br>
    Minutes: ${Math.floor((dif % 3600) / 60)}\n <br>
    Hours: ${Math.floor((dif % (3600 * 24)) / 3600)}\n <br>
    Days: ${Math.floor(dif / (3600 * 24))}`;
  } else {
    $.color = "#EF476F";
    $.fontSize = "22px";
    $.fontWeight = "bold";

    res.innerHTML = `Invalid time`;
  }
};

btt.addEventListener("click", getDate);

console.log(btt);
