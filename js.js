//* Setter & Getter di Class

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullName(){
        return `${this.firstname} ${this.lastname}`;
    }

    set fullName(value){
        const result = value.split('');
        this.firstname = result(0);
        this.lastname = result(1);
    }
}

   const kelvin = new Person('Kelvin', 'Falah')
   console.info(kelvin)
   