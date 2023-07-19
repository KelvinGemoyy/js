

// Function Constructor
// Di function consttructor kita mmebuat semua huruf var menjadi kapital
// Ketika membuat const function kita membuat keyword new
// Menambahkan property this pada const function

// contoh 1
function OrangBaru(namaDepan,namaBelakang) {
   this.namaDepan ='';
   this.namaBelakang = '';
   this.sayHello() = function (nama) {
      console.log(`Hello ${nama}, my name is ${this.namaDepan}`);
   }
}

const kelvin = new OrangBaru();
kelvin.namaDepan = 'Muhammad';
kelvin.namaBelakang = 'Raditya';

const falah = new OrangBaru();

//function PremiumMember ( ) {
   
//}

// Constructor Inheritance
function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`hi ${name}, my name is ${this.firstName}`);
    }
}
