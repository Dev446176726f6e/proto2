// // yangi array e'lon qilish.
// const info = [];
// // bu holatda element bo'lmasada array ichida 100 da bo'sh joy olib qo'yadi.
// const info2 = new Array(100);

// const carModel = ["chevy", "dodge", "ford"];
// // elementlarga array indeksi orqali chaqirsak bo'ladi.
// console.log(carModel[1]);

// carModel[10] = "jeep"; // bu uslub tavsiya qilinmaydi.


// const mevalar = ["olma", "anor", "uzum"];
// console.log(mevalar);
// mevalar.push('behi', 'shaftoli')
// console.log(mevalar);

// console.log(mevalar.length);

// // ohiridan o'chiradi.
// const meva = mevalar.pop();
// console.log(meva);

// // boshidan qo'shadi.
// mevalar.unshift('behi', 'shaftoli');
// console.log(mevalar);

// // boshidan o'chiradi.
// const meva2 = mevalar.shift();
// console.log(meva2);
// console.log(mevalar);

// const mevalar = ['olma', 'anor', 'uzum'];
// console.log(mevalar[1]);
// // bu undefined qaytaradi...
// console.log(mevalar[-1]);
// // at esa orqadan qiymat qaytaradi...
// console.log(mevalar.at(-2));
// console.log(mevalar.at(1));

// // bunday nusxa olish tavsiya qilinmaydi.
// // ikkalasi ham hotiraning bir joyida joylashib qoladi.
// const frukti = mevalar

// tozalash ning eng ozon yo'li length uzunligini 0 ga tenglash.
// const mevalar = ["olma", "anor", "uzum"];
// mevalar.length = 0;
// // yoki ichki elementlaridan kattaroq son bersak 0 bilan bo'sh qismini to'ldirib qo'yadi.
// // agar kamroq element sonini berska shunchaki qisqaradi.
// console.log(mevalar);
// console.log(mevalar[1]);

// // bu odatiy yo'li.
// for (let i = 0; i < mevalar.length; i++) {
//    const element = mevalar[i];
//    console.log(element);
// }

// // hamda for of dan ham foydalaniladi. bizga elementni olib beradi.
// for (const meva of mevalar) {
//    console.log(meva);
// }

// // for in - indexini olib beradi.
// for (const i in mevalar) {
//    console.log(mevalar[i]);
// }

// const matrix = [
//   [1, 2, 3, 14],
//   [4, 5, 6, 16],
//   [7, 8, 9, 18],
// ];

// console.log(matrix);
// const colsCount = matrix[0].length;
// const rowsCount = matrix.length;
// // console.log(matrix);
// // console.log(rowsCount);
// // console.log(colsCount);

// for (let i = 0; i < rowsCount; i++) {
//    for (let j = 0; j < colsCount; j++) {
//       console.log(matrix[i][j]);
//    }
// }

// const matrix = [
//   [1, 2, 3, 14],
//   [4, 5, 6, 16],
//   [7, 8, [9, 8], 18],
// ];

// // ichidagi array larni yoyib chiqadi.
// console.log(matrix.flat());

// // agar ichida yana ichma-ich massiv bo'lsa ikki marta flattdan foydalaniladi.
// console.log(matrix.flat().flat()););

// prompt
// function sumOf() {
//   const num = [];
//   let input;

//   do {
//     input = prompt("Enter a number");
//     if (input === null || isNaN(input)) {
//       break;
//     }
//     num.push(Number(input));
//   } while (true);

//   const sum = num.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }

// console.log(sumOf());

// ikkita massiv-ni  tenglik bilan tekshirish.
// no'to'g'ri hisoblanadi. bu holatda
// array boshqa o'zgaruvchiga tenglashtirilgan
// bo'lsa bitta address-da turgani uchun teng chiadi. unday bo'lmasa ham.

// universal. swiss knife for array.

// const mevalar = ["olma", "anor", "uzum"];
// const frukti = mevalar.splice(1, 2); // pop
// console.log(mevalar);
// console.log(frukti);

// // element qo'shish. agar ikkinchi nechta element qo'shish joyi da son bo'lsa o'chirib almashadi.
// const mevalar = ["olma", "anor", "uzum"];
// // agar 0 bo'lsa o'chirmaydi o'sha boshlanish joyidan nechta ko'rsatilgan qiymat bo'lsa qo'shadi.
// const frukti = mevalar.splice(0, 1, 'nok', 'shaftoli'); // pop
// console.log(mevalar);
// console.log(frukti);

// // slice method just asks from which interval of index it should copy.
// const mevalar = ["olma", "anor", "uzum"];
// const frukti = mevalar.slice();
// // yana bir tomonni ichiga qiymat berilmasa nusxa oladi.
// // bir-biriga aloqasi yo'q.

// console.log(mevalar);
// console.log(frukti);

// // concat. metodidan array larni qo'shish
// const mevalar = ["olma", "anor", "uzum"];
// const frukti = ['marakuya', 'mango', 'durian'];

// // ichiga qo'shimcha ravishda qiymat bersak ham bo'ladi.
// const fruits = mevalar.concat("olcha", frukti);
// console.log(fruits);

// const mevalar = ["olma", "anor", "uzum"];

// forEach metodi. massiv elementlarini misol uchun funksiyaga jo'natib
// amal bajaradi.
// mevalar.forEach(function (meva, ind) {
//   console.log(meve[ind]);
// });

// // arrow function.
// mevalar.forEach(meva) => console.log(meva);

// third way calling function declaration.

// function showFruite(meva, ind, frukti) {
//    console.log(meva);
// }

// const mevalar = ['Olma', 'Anor', 'Nok'];
// const fruits = ['Banana', 'Ananas', 'Lemon'];

// mevalar.forEach(showFruite);
// fruits.forEach(showFruite);

// const mevalar = [
//   { nomi: "Olma", narxi: 10_000 },
//   { nomi: "Nok", narxi: 20_000 },
//   { nomi: "Uzum", narxi: 40_000 },
// ];

// mevalar.forEach((meva) => {
//   console.log(meva.nomi, meva.narxi);
// });

// let zapchastlar = [
//   { nomi: "svecha", narxi: 30000, carModel: "spark" },
//   { nomi: "akkumlyator", narxi: 500000, carModel: "spark" },
//   { nomi: "svecha", narxi: 35000, carModel: "nexia" },
//   { nomi: "babina", narxi: 450000, carModel: "spark" },
//   { nomi: "ballon", narxi: 700000, carModel: "nexia" },
// ];

// let sum = 0
// zapchastlar.forEach((zapchast) => {
//    if (zapchast.carModel === "spark") {
//       sum += zapchast.narxi;
//    }
// });

// console.log(sum);

// const sonlar = [6, 7, 4, 9, 12, 61, 21, 34, 71];
// // searching values in indexOf it returns (if it's many) first found index
// console.log(sonlar.indexOf(7, 5))
// // as usual returns -1 when not found.
// console.log(sonlar.lastIndexOf('71'));
// // cannot find number inside string.

// function toqmi(son) {
//   if (son % 2) return true;
//   return false;
// }

// function tekshir(son) {
//   if (son % 2) return son;
//   return son / 2;
// }

// const sonlar = [6, 7, 4, 9, 12, 61, 21, 34, 71];
// const sonlar1 = [ 7, 9, 61, 21, 71];

// // find berilgan funksiyamiz orqali massivda iteratsiya qilib tekshiradi.
// console.log(sonlar.find(toqmi));
// // bu esa birinchi topganini qaytaradi.
// console.log(sonlar.findIndex(toqmi));
// console.log(sonlar.filter(toqmi));
// // filter ishlash prinsipi kiritilgan callback funksiyasi orqali
// // true qaytarganlarini filtrlab massiv ko'rinishida qaytarib beryapti.

// console.log(sonlar.map(tekshir));

// // map for changing values through function || filter for finding and checking through function.

// console.log(sonlar.some(toqmi));
// console.log(sonlar1.every(toqmi));

// const sonlar = [6, 7, 4, 9, 12, 61, 21, 34, 71];
// const sonlar1 = [ 7, 9, 61, 21, 71];

// // default string ko'rinishida tartibladi. ya'ni arrayda son bo'lishiga qaramasdan.
// // console.log(sonlar.sort());
// console.log(sonlar.sort((a, b) => a - b));
// console.log('5' - '2');

// const sonlar = [6, 7, 4, 9, 12, 61, 21, 34, 71];
// console.log(sonlar.toString());
// console.log(sonlar + '');
// console.log(sonlar.join());

const mevalar = ["Olma", "Anor", "Nok", "Uzum", "Marakuya", "Mango"];

function len(s) {
  return s.length;
}

const sorted = mevalar.sort((a, b) => a - b);
