// ciklicno izvrshuvanje
// Arrays and loops

const string = "string"
const number = 1
const test = null //undefined
const bool = true // false

const array = []; //empty array / niza

// indeksiranjeto sekogash pocnuva od 0, 1, 2 ...
// vo pogolem broj od slucaite niza najdobro da bide 'const'

const pets = ['Cat' , 'Dog' , 'Rabbit' , 'Parrot'] // niza so deklarirani elementi
            //index0  //index1 //index2 //index3
const friends = ['Aleksandar' , 'Ana' ,    'Angela'] //array declaration
                //index0        //index1    //index2

console.log(pets)

console.log(pets[1]) //Dog

console.log(pets[3]) //Parrot

pets[0] = 'Fish' //direktno dodavanje na element vo niza, izmegju const i zagradite da nema space


pets[4] = 'Cat'


console.log(pets)

const temporary = pets[0] // menuvanje mesta na dva elementi vo niza
pets[0] = pets[3]
pets[3] = temporary

console.log(pets)

pets.push('Goat') //dodava element vo nizata sekogash na kraj
pets.unshift('Mouse') //dodava element vo nizata na start/pocetok

console.log(pets)

const element1 = pets.pop() //brishe element od krajot na nizata
const element2 = pets.shift() //brishe element od pocetokot na nizata
//so kreiranje na konstanta od pop i shift go cuvame izbrishaniot element ako zatreba ponataka

console.log(pets)

const length = pets.length //ni pokazuva kolku elementi ima vo nizata
console.log(length)

const newArray = [ 1, 'Ana', true, ['Aleksandar', 'Petar']] //meshavina od elementi i niza vo niza

console.log(newArray [3][1]) //pecatenje element od nizata vo niza
