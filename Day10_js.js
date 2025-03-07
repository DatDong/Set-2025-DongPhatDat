function inBangCuuChuong(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----------------");
  }
}

inBangCuuChuong(5);

function xuLyMang(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  let avg = sum / arr.length;
  return { max, min, avg };
}

let numbers = [10, 5, 20, 8, 30];
console.log(xuLyMang(numbers));

function gameDoanSo() {
  let soNgauNhien = Math.floor(Math.random() * 100) + 1;
  let soLanDoan = 0;
  let doan;

  console.log("Game đoán số !!!");
  console.log("Hãy thử đoán một số từ 1 đến 100.");

  while (doan !== soNgauNhien) {
    do {
      doan = parseInt(prompt("Nhập số bạn đoán (1 - 100): "), 10);

      if (isNaN(doan) || doan < 1 || doan > 100) {
        console.log("Số bạn đoán không nằm trong 1-100");
      }
    } while (isNaN(doan) || doan < 1 || doan > 100); 
    soLanDoan++;

    if (doan < soNgauNhien) {
      console.log("Số bạn đoán nhỏ hơn rồi !");
    } else if (doan > soNgauNhien) {
      console.log("Số bạn đoán lớn hơn rồi !");
    } else {
      console.log(
        `Bạn đã đoán đúng ${soNgauNhien} sau ${soLanDoan} lần thử.`
      );
    }
  }
}

gameDoanSo();
