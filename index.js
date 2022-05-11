let size = 86;
let columns = Array.from(document.getElementsByClassName("column"));
let class_list = ["visible", "near", "far", "far", "distant", "distant"];
let is_24_hour_clock = true;

function getClock() {
  let date = new Date();
  let hour = is_24_hour_clock ? date.getHours() : date.getHours() % 12 || 12;
  hour = hour < 10 ? "0" + hour : hour;
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  return hour + "" + minute + "" + second;
}

function getClass(n, i) {
  return class_list.find(function (_class, class_index) {
        return i - class_index === n || i + class_index === n;
    }) || "";
}

setInterval(() => {
  let clock = getClock();
  columns.forEach((ele, i) => {
    let n = parseInt(clock[i]);
    let offset = -n * size;
    ele.style.transform = `translateY(calc(50vh + ${offset}px - 38px)`;

    Array.from(ele.children).forEach((number, j) => {
      number.className = "num " + getClass(n, j);
    });
  });
}, 1000);
