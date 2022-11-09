// niza od broevi koja shto ja prikazuva prosecnata temperatura za sekoj den od nedelata.
//da se najde prosecnata temperatura vo nedelata

const temperatures = [15, 16, 20, 21, 24, 31, 18]


let sum=0
for (let temp of temperatures) {
    sum = sum + temp
}
console.log (sum / temperatures.length)

const pets = ['Cat', 'Dog', 'Rabbit', 'Parrot', 'Goat', 'Mouse', 'Bird']

for (let i = 1; i < pets.length; i += 2) {
    console.log(pets[i])
}

for (let i = 0; i < pets.length; i ++) {
    if (i % 2 !== 0) {
    console.log(pets[i])
    }
}

const validity = [1, 2, null, 'Username', 7, undefined, 5, 'Pasword', NaN]

const valid = []
for (const el of validity) {
    if (el) valid.push(el)
}
console.log(valid)

