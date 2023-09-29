// No 1 Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
const firstName = " Ranti ";
const lastName = " indriyani ";
const age = 25;
const isMarried = false;
//melakukan pengujian dengan console.log()
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);// boolean

// atau bisa juga seperti ini
// no 1. firstName : bertipe data sstring ,dengan nilai nama depan 
console.log(" * Ranti ")
//atau bisa seperti ini untuk memanggil nama depan
var firstname = "Ranti"
console.log(" Nama depan  : " + firstName)

// no 2 . bertipe data string ,dengan nilai nama belaang anda
console.log(" * indriyani ")
//cara lain
var lastname = " indriyani "
console.log( " Nama belakang : " + lastName)

//untuk menggabungkan nama depan dan nama belakang 
var firstname = " Ranti"
function printFullName(){
    var lastname = " indriyani "
    return firstname + " " + lastname
}
console.log(" fullName " +printFullName())

// NO 3 . bertipe data number,dengan nilai umur anda
console.log(" umur saya  " +26)
//isMarried
const menikah = 28
const nomarried = 20

const sudahMenikah = menikah > 20
const belumMenikah = nomarried > 20

const KeputusanMenikah = sudahMenikah && belumMenikah
console.log(KeputusanMenikah)

