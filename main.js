let soluong1 = document.querySelector("#soluong1");
var soluong2 = document.querySelector("#soluong2");
var soluong3 = document.querySelector("#soluong3");
var soluong4 = document.querySelector("#soluong4");

console.log(soluong1.value);

function tien1_() {
  var tien1 = soluong1.value * 200;
  document.getElementById("tien1").innerText = tien1;
  return tien1;
}
function tien2_() {
  var tien2 = soluong2.value * 300;
  document.getElementById("tien2").innerText = tien2;
  return tien2;
}
function tien3_() {
  var tien3 = soluong3.value * 400;
  document.getElementById("tien3").innerText = tien3;
  return tien3;
}
function tien4_() {
  var tien4 = soluong4.value * 500;
  document.getElementById("tien4").innerText = tien4;
  return tien4;
}
function tong() {
  var tong = tien1_() + tien2_() + tien3_() + tien4_();
  document.getElementById("tongall").innerText = `${tong}`;
}

// do em đặt giá trị min="0" và max="20" ở bên html trong phần input = numnber nên sẽ không cần alert nữa ạ
