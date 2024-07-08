// * 1-misol. Ikkita massivdagi takrorlanmaydigan elemntlarni chiqaruvchi dastur yozing
// * concate(), falt() kabi methodlar kerak bo'ladi.
function difference(arr1, arr2) {
  // Natija uchun.
  const unique = {};
  // Ichma-ich qavslardan qutulish.
  let a = arr1.flat(Infinity);
  let b = arr2.flat(Infinity);
  // Ikki array-larni qo'shish.
  const two = a.concat(b);
  for (let x of two) {
    if (unique[x]) continue;
    else unique[x] = 1;
  }
  let keys = Object.keys(unique); 
  return keys;
}

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

// * 2-misol. funksiyaga massiva va o'zgarishi kerak bo'lgan elementlarning 
// * indexksi beriladi. Vazifa ularning o'rnini almashtirish.
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

//  tekshiruv uchun uch holat. faqat musbat, faqat manfiy va aralash indekslar berilgan.
// let array = [1, 2, 3, 4, 5];
// console.log(move(array, 1, 3)); 
// console.log(move(array, -1, -3)); 
// console.log(move(array, -1, 3)); 
// console.log(move([10, 20, 30, 40, 50], -1, 0));


// * 3-misol. Barcha unikal. Ya'ni, barcha qatnashgan va hattoki takrorlangan elementlarni.
// * qaytarish. Ammo, map va set lardan foydalanish mumkin emas.

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

// ! vazifani bajarish davomida chiqgan hatolarni hal qilish.
const value = [
  [1, 2, 2, 3, 4, 4, 5],
  [1, 2, 3, 4, 5],
  [1, -2, -2, 3, 4, -5, -6, -5],
];
// console.log(findUnique(value));
// Kutilayotgan natija: [1,2,3,4,5] [1,2,3,4,5] [1,-2,3,4,-5,-6]


// * End of File.