

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

  //  function Employee(name) {
  //   this.name = name;
  //  }

  //  function Manager(name) {
  //    this.name = name;
  //  }

   //! Cara yang salah adalah
   //! Manager.prototype = Employee.prototype

   //* Yang benar adalah:
  // Manager.prototype = Object.create(Employee.prototype);
  

  //  Manager.prototype.sayHello = function (name) {
  //   console.log(`Hello ${name}, my name is Manager ${this.name}`);
  //  }

  //  Employee.prototype.sayHello = function (name) {
  //   console.log(`Hello ${name}, my name is Employee ${this.name}`);
  //  }

  //  const employee = new Employee ('kelvin');
  //  employee.sayHello('thirza');


  //  const manager = new Manager ('thirza');
  //  manager.sayHello (`kelvin`);

  //  console.log(manager.sayHello);
  //  console.log(employee);
  //  console.log(manager);

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

  // class Employee {
  //   constructor(firstname) {
  //     this.firstname = firstname;
  //   }

  //   sayHello(name) {
  //     console.info(`Hello ${name},my name is employee ${this.name}`);
  //   }
  // }

  // class Manager extends Employee {
    
  //   constructor(firstname,lastname) {
  //     super(firstname);
  //     this.lastname = lastname;
  //   }

  //   sayHello(name) {
  //     console.info(`Hello ${name},my name is ${this.firstname} ${this.lastname}`)
  //   }
  // }

  // const kelvin = new Employee('Kelvin','Raditya');
  // kelvin.name = 'Kelvin';
  // kelvin.sayHello('Thirza')

  // const thirza = new Manager('Thirza','Zanetta');
  // thirza.name = 'Thirza';
  // thirza.sayHello('Kelvin')

  //* Super Method
//  class Nama {
//    tesNama() {
//     console.info('Kelvin')
//    }
//  };

//  class namaPanjang extends Nama {
//   tesNama() {
//     super.tesNama();
//     console.info('Muhammad Raditya')
//   }
//  }

 
//  const nama = new namaPanjang();
//  nama.tesNama();

 //* Public Class Field
//  class Customer{
//    firstname;
//    lastname;
//    balance = 0;

//    constructor(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//    }

//    sayHello(){

//    }
//  };

//  const kelvin = new Customer();
//  console.info(kelvin)

 //* Private Class Field
 class Counter {
   #counter = 0;

   increment(){
    this.#counter++;
   }

   decrement(){
    this.#counter--;
   }

   get(){
    return this.#counter;
   }


 }

 const counter = new Counter();

 counter.increment();
 counter.increment();
 counter.increment();
 counter.increment();
 counter.increment();

 console.info(counter.get());

 



 


   




