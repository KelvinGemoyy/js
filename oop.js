

//* Function Constructor
// Di function consttructor kita mmebuat semua huruf var menjadi kapital
// Ketika membuat const function kita membuat keyword new
// Menambahkan property this pada const function

//* contoh 1
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



//*     // Constructor Inheritance
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

    //* Prototype Inheritance
    //* Object Instance

//    function Employee(name) {
//     this.name = name;
//    }

//    function Manager(name) {
//      this.name = name;
//    }

//    //! Manager.prototype = Employee.prototype; salah
//    //* Yang benar adalah:
//    Manager.prototype = Object.create(Employee.prototype);
  

//    Manager.prototype.sayHello = function (name) {
//     console.log(`Hello ${name}, my name is Manager ${this.name}`);
//    }

//    Employee.prototype.sayHello = function (name) {
//     console.log(`Hello ${name}, my name is Employee ${this.name}`);
//    }

//    const employee = new Employee ('kelvin');
//    employee.sayHello('thirza');


//    const manager = new Manager ('thirza');
//    manager.sayHello (`kelvin`)

//    console.log(manager.sayHello);
//    console.log(employee);
//    console.log(manager);

//*   Membuat Class
//    Sejak ES6,di perkenalkan kata kunci baru yaitu class,ini merupakan kata kunci yang di gunakan  untuk membuak class  di Javascript
//    Dengan kata kunci class,kita tidak perlu lagi menggunakan constructor function yang membuat class
     
      const name ='Jannah';
      class Person {
               constructor(name) {
                this.name = name;
                this.sayHello = function (name) {
                    console.info(`hai nama aku ${name},salam kenal yah${this.name}`)
                }
               }
      }

      

      const kelvin = new Person('Kelvin');
      console.info(kelvin);
      console.info(kelvin.name);

      const thirza = new Person('thirza')
      console.info(thirza)
      console.log(constructor);
      console.log(name);
      console.log(this.sayHello);
      //* Method di class
      


    
