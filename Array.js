let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

let tingkatan_kelas = [10,11,12]

let siswa = [
    {
        nama: "Shangla", jurusan: "RPL"
    },
    
    {
        nama: "Jinggan", jurusan: "TKJ"
    },
    
    {
        nama: "Sambadha", jurusan: "RPL"
    },
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

let kota = ["Malang","Surabaya","Tulungagung"]

console.log("isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------");

kota.push("Banyuwangi")

console.log("isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

kota.splice(2,1)

let barang = [
    { nama: "Pulpen", harga: 5000},
    { nama: "Pensil", harga: 4000}
]

console.log("isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------")

barang.push(
    { nama: "Penghapus", harga: 10000 }
)

console.log("isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

let siswa = [
    {nama_depan = "Harry", nama_belakang: "Potter"},
    {nama_depan = "Ron", nama_belakang: "Weasley"},
    {nama_depan = "Harmione", nama_belakang: "Granger"},    
]

siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)