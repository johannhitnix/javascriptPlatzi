let nums = [1,2,3,4,5,6,7]

const multiplicar = n => n * 19
let numsx19 = nums.map(multiplicar)
console.log(numsx19)

const m80 = (n) => n < 80
let menoresQ80 = numsx19.filter(m80)
console.log(menoresQ80)

let obj = {
    codigo: "001f",
    nombre: "James Bond",
    tel: 7007007
}

for (const i in obj) {
    console.log(`${obj[i]}`)
}