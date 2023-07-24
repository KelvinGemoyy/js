

// function Employee(name) {
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

//*   Membuat Class Inheritance
     
      class Cewe {
        constructor(umur, ukuran, tanggal) {
          this.umur = umur;
          this.ukuran = ukuran;
          this.tanggal = taggal;
        }

        start() {
          console.log('Sedang di mulai..');
        }

        stop() {
          console.log('Telah selesai..');
        }
      }

      const myCewe = new Cewe ('Fulan',16,'25 Mei')
      console.info(perkosa());