

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
//*   Method Di Class
//    Sejak ES6,di perkenalkan kata kunci baru yaitu class,ini merupakan kata kunci yang di gunakan  untuk membuak class  di Javascript
//    Dengan kata kunci class,kita tidak perlu lagi menggunakan constructor function yang membuat class
     
    // const name ='Jannah';
    //   class Person {
    //            constructor(name) {
    //             this.name = name;
    //            }

    //            sayHello(name) {
    //             console.log(`Hai ${name},nama saya ${this.name}`);
    //            }
    //   }

      

    //   const kelvin = new Person('Kelvin');
    //   console.info(kelvin);
    //   kelvin.sayHello('tasya');
      

    //   const thirza = new Person('thirza')
    //   thirza.sayHello('kelvin')
    //   console.info(thirza)
    //   console.log(Person);
     
    //*  Class Inheritance
  //   class Employee{

  //       constructor(name) {
  //         this.name = name;
  //       }
       
  //       sayHello(name) {
  //           console.info(`Hello ${name},my name is employee ${this.name}`)
  //       }
  //   }

  //  class Manager extends Employee {

  //    sayHello(name) {
  //       console.info(`Hello ${name},my name is manager ${this.name}`)
  //    }
  //  }

  //  const kelvin = new Employee();
  //  kelvin.name = 'kelvin';
  //  kelvin.sayHello('thirza');
    
  //  const thirza = new Manager();
  //  thirza.name = 'thirza';
  //  thirza.sayHello('thirza');

  //  console.log(sayHello());
    
  //* Super Constructor

  for (let i = 0;1 < 100; i++) {
    console.log('saya suka thirza');
  }


   




