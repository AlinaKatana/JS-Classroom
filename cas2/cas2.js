// USLOVNI KOMANDI
//if (/*uslov - logicki iskaz*/) {
    //code block
    //komanda 1
    //komanda 2
    //komanda 3
//}

// logicki operatori za sporedba <, >, >=, =<, ==, !=, ===, !==

const a = 10, b = "10";
const uslov = a !== b

// ako uslovoto e ispolnet
if (uslov) {
    console.log("A ne e ednakvo od B")
}

// ako uslovot ne e ispolnet
if (!uslov) {
    console.log("A e ednakvo na B")
}

if (uslov) {
    console.log("A ne e ednakvo na B")
} else {
    console.log("A e ednakvo na B")
}

console.log("prodolzuvam...")

console.log("drugi komandi")

const broj1 = 10, broj2 = 15;

// if else structure, if-else statement

if (broj1 > broj2) {
    console.log(broj1 + " e pogolem od " + broj2)
} else if (broj1 < broj2) {
    console.log(broj1 + " e pomal od " + broj2)
} else {
    console.log(broj1 + " e ednakov na " + broj2)
}

// one-liner - ternaren opereator za sporedba

console.log("Aleksandar" === "Ana" ? "Iminjata se isti" : "Iminjata ne se isti")

// kompleksen uslov

const water = 22;
const coffee = 60;

// || ili - or
if (water < 20 || coffee < 10) {
    console.log("Error")
}

// && i - and
if ((water > 20) && (coffee > 10)) {
    console.log("Moze da se napravi kafe")
}

// bolean true/false

// switch-case struktura / switch-case statement

const animal = "Horse"
 switch (animal) {
    case "Parrot" : {
        console.log("This animal can sing")
        break
    }

    case "Dog" : {
        console.log("This animal can not sing")
        break
    }

    case "Monkey" : {
        console.log("This animal can partly sing")
        break
    }

    default : {
        console.log("Unknown Animal")
    }

 }

 