// ciklusi
//uslovi

// while prvo proveruva uslov pa izvrshuva komandi

//while (uslov) {
    //komanda1
    //komanda2
    //komanda3
//}

// do-while prvo izvrshuva komandi pa proveruva uslov
//do{
    //komanda1
    //komanda2
    //komanda3
//} while (uslov)

let number = 1;
while (6 > number) {
    console.log('6 pogolemo od ' + number)
    number = number + 1 //>> number++ , number += 1
}

//let i = 1; //i = iterator
//while (6 > i) {
//    console.log('6 pogolemo od ' + i)
//    i = i + 1
//}

let number1 = 1;
while (101 > number1) {
    console.log(number1)
    number1 = number1 + 1 //>> number++ , number += 1
}

const pets = ['Cat', 'Dog', 'Rabbit', 'Parrot', 'Goat', 'Mouse', 'Bird']

// while iteracija
let i = 0;
while (i < pets.length) {
    console.log(pets[i])
    i++
}

// for iteracija raboti kako while samo se pishuva vo eden red, vo malite zagradi
for(let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}

for(let i = pets.length -1; i >= 0; i--) { // i-- , namaluva za eden
    console.log(pets[i])
}

for (let pet of pets) { //uprosteno iteriranje na nizi
    console.log(pet)
}

for (let pet of pets.reverse()) { //uprosteno iteriranje na nizi od obratno
    console.log(pet)
}