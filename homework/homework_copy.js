// 2-misol. move(array, qiymat1, qiymat2) funksiyasi kiritilgan
// arraydagi qiymat1 indeksda turagan elementni qiymat2 ga almashtirish.

// function move(arr, in1, in2) {
//    // const element = arr[in1];
//    // arr.splice(in1, 1);
//    // arr.splice(in2, 0, element);
//    const el1 = arr.at(in1);
//    console.log(el1);
//    const el2 = arr.at(in2);
//    console.log(el2);
//    arr[in1] = el2;
//    arr[in2] = el1;
//    return arr;
// }

// console.log(move([1, 2, 3, 4, 5], 0, 2));

// // bu shunchaki o'chirib surib qo'yadigan sayt. ?
// function move(arr, in1, in2) {
//    const element = arr[in1];
//    const element2 = arr[in2];
//    arr.splice(in1, 1);
//    arr.splice(in2, 0, element);
//    return arr;
// }

// console.log(move([1, 2, 3, 8, 11, 79], 3, 0));

// function move(arr, in1, in2) {
//   if (in1 >= 0 && in2 >= 0) {
//     const element = arr[in1];
//     const element2 = arr[in2];
//     arr.splice(in1, 1, element2);
//     arr.splice(in2, 1, element);
//     return arr;
//   } else if (in1 < 0 && in2 < 0) {
//     const arr2 = arr.reverse();
//     const element = (in1) => {
//       in1 += 1;
//       if (in1 < 0) return arr[in1 * -1];
//       return arr2[in1];
//     };
//     // element *= element;
//     const element2 = (in2) => {
//       in2 += 1;
//       if (in2 < 0) return arr[in2 * -1];
//       return arr2[in2];
//     };
//     // element2 *= element2;
//     console.log(element, element2);
//     arr2.splice(in1, 1, element2);
//     arr2.splice(in2, 1, element);
//     return arr2;
//   }
// }



// 2-misol. funksiyaga massiva va o'zgarishi kerak bo'lgan elementlarning 
// indexksi beriladi. Vazifa ularning o'rnini almashtirish.
function move(arr, in1, in2) {
  const len = arr.length;

  // Bu yerda manfiy bo'lgan elementlarni ham musbat indeksga o'zgartiriladi.
  if (in1 < 0) in1 = len + in1;
  if (in2 < 0) in2 = len + in2;

  // Indekslar tekshirilganidan so'ng. Yana bir bor ularni
  // manfiya va berilgan massiv len-dan katta emasligi tekshiriladi.
  if (in1 >= 0 && in1 < len && in2 >= 0 && in2 < len) {

  // Endi, indeksdagi elementlar swap. Ya'ni almashtiriladi.
  // [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
    let temp = arr[in1];
    arr[in1] = arr[in2];
    arr[in2] = temp;
  }

  return arr;
}

// // tekshiruv uchun uch holat. faqat musbat, faqat manfiy va aralash indekslar berilgan.
// let array = [1, 2, 3, 4, 5];
// console.log(move(array, 1, 3)); 
// console.log(move(array, -1, -3)); 
// console.log(move(array, -1, 3)); 
// console.log(move([10, 20, 30, 40, 50], -1, 0));


// 3-misol. Barcha unikal. Ya'ni, barcha qatnashgan va hattoki takrorlangan elementlarni.
// qaytarish. Ammo, map va set lardan foydalanish mumkin emas.

// Shu sababli har bir element orqali iteratsiya qilib chiqishimizga to'g'ri keladi.
function findUnique(numbers) {
  let after = []; // Natijani yig'ish uchun array.
  for (let x of numbers) { //Birinchi for. Ichma-ich array uchun.
    let uniqe = {}; // set dan foydalanmaganimiz sababli obyekt key xususiyatidan foydalanamiz.
    for (let y of x) { // Ichki array elementlari orqali iteratsiya qilish.
      if (uniqe[y]) continue; // Mavjud bo'lsa davom etadi.
      else uniqe[y] = 1; // Bo'lmasa qo'shadi.
    }
    let keys = Object.keys(uniqe); // keys metodi orqali keylar massiv bo'lib qaytadi
    after.push(keys); // Unikal massivni ummumiy natija arrayiga push qilamiz.
    keys = [];  // obyekt keylarini yig'uvchi arrayni tozalaymiz.
    // keys.length = [];
    // keys.length = 0;
    uniqe = {}; // Va so'ngida obyekt ham tozalaymiz.
    // uniqe = null;
  }
  return after;
  // qo'shimcha obyekt xususiyati bo'lsa kerak. Elementlar sortlangan.
}

//vazifani bajarish davomida chiqgan hatolarni hal qilish.
const value = [
  [1, 2, 2, 3, 4, 4, 5],
  [1, 2, 3, 4, 5],
  [1, -2, -2, 3, 4, -5, -6, -5],
];
console.log(findUnique(value));
// Kutilayotgan natija: [1,2,3,4,5] [1,2,3,4,5] [1,-2,3,4,-5,-6]
