const methodMahasiswa = {
    nama: "Kelvin",
    energi: 20,
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama},selamat makan`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
};

function  Mahasiswa (nama,energi) {    
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    mahasiswa.tidur = methodMahasiswa.tidur

    return mahasiswa;
    console.log(mahasiswa);
};

let kelvin = Mahasiswa('kelvin', 20);
let falah = Mahasiswa('falah', 30);

console.log(kelvin);
console.log(methodMahasiswa);
console.log(Mahasiswa);

