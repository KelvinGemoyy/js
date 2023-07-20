// Execution Context, Hoisting and Scope

// console.log(nama);
// var nama;

// Creation Phase Pada Global Context
// Nama Var = undified
// Nama Function = fn()
// Hoisting
// Window = Global Object
// This = Window

//Execution Phase

//console.log();

// var cetak = sayHello();

// // function sayHello() {
// var nama = "Falah";
//  var umur = 16;
// return `Halo, nama saya ${nama} dan umur saya ${umur} tahun `;
//}

// Function membuat local execution context
// Yang di dalamnya terdapat creation dan execution context
// window
// argument
// hoisting
kenal();
function kenal() {
  var nama = "kelvin";
  var angka = 16;

  return angka;
}

console.log(kenal());
