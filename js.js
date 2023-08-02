//* Setter & Getter di Class
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     get fullName(){
//         return `${this.firstname} ${this.lastname}`;
//     }

//     set fullName(value){
//         const result = value.split('');
//         this.firstname = result[0];
//         this.lastname = result[1];
//     }
// }

//    const kelvin = new Person('Kelvin', 'Falah')
//    console.info(kelvin)
//    console.info(kelvin.fullName);

//    kelvin.fullName = 'Muhammad Kelvin Raditya';
//    console.info(kelvin)


//* Belajar OOP Mandiri

      class Crush {
        constructor(nama,umur,kelas) {
            this.nama = nama;
            this.umur = umur;
            this.kelas = kelas;
        }

        confess(){
            console.log(`Kelvin ini adalah aku ${this.nama},aku sangat merindukanmu`);
        }
      };

      const crush1 = new Crush('Thirza',16,'1 SMA');
      crush1.confess();