const broj = 3
broj1 = broj / 2

if (broj === 0 ) {
    console.log(broj + " ne e nitu paren nitu neparen ")
} else {
    if ( broj % 2 === 0) { 
        console.log(broj + " e paren ")   
    } else {
        console.log(broj + " ne e paren ")
    }
}

const vozrast = 5

if (vozrast >= 21) {
    console.log("Moze da pie, glasa i vozi")
} else if (vozrast >= 18) {
    console.log("Moze da glasa i vozi")
} else if (vozrast >= 18) {
    console.log("Moze da vozi")
} else {
    console.log("Nemoze da pravi ni edna od trite")
}


const vreme = 18

if ((vreme >= 1) && (vreme <= 12)) {
    console.log("Dobro Utro")
} else if ((vreme >= 13) && (vreme <= 18)) {
    console.log("Dobar Den")
} else if ((vreme >= 19) && (vreme <= 24)) {
    console.log("Dobra Vecer")
} else {
    console.log("Cao")
}


const month = 10

if (month === 8) {
    console.log("Ima 31 denovi")
} else if (month === 2) {
    console.log("Ima 28 denovi")
    } else if (month % 2 === 0){ 
        console.log("Ima 30 denovi ")   
    } else {
        console.log("Ima 31 den")
    }
