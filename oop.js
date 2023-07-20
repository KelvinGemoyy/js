

// Function Constructor
// Di function consttructor kita mmebuat semua huruf var menjadi kapital
// Ketika membuat const function kita membuat keyword new
// Menambahkan property this pada const function

// contoh 1
// function OrangBaru(namaDepan,namaBelakang) {
//    this.namaDepan ='';
//    this.namaBelakang = '';
//    this.sayHello() = function (nama) {
//       console.log(`Hello ${nama}, my name is ${this.namaDepan}`);
//    }
// }

// const kelvin = new OrangBaru();
// kelvin.namaDepan = 'Muhammad';
// kelvin.namaBelakang = 'Raditya';

// const falah = new OrangBaru();



//     // Constructor Inheritance
//     function Employee(firstName) {
//         this.firstName = firstName;
//         this.sayHello = function (name) {
//             console.info(`hi ${name}, my name is ${this.firstName}`);
//         }
//     };

//     function Manager (firstName, lastName) {
//         this.lastName = lastName;
//         Employee.call(this, firstName);
//     };

//     const thirza = new Manager('Nur', 'Zanetta');
//     console.log(thirza);

    // Prototype Inheritance
    // Object Instance

    function Person (firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = funtion (name) {
            console.info(`Hello ${name}, my name is ${this.firstName}`);
        }
    }

    const kelvin = new Person ('Muhammad','Falah');
    const thirza = new Person ('Nur','Zanetta');

    console.log(kelvin);
    console.log(thirza);
    
