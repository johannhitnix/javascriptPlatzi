// EJEMPLO #1
console.log(1)
setTimeout(() => console.log(2), 0)
console.log(3)

// EJEMPLO #2
$.on('button', 'click', function Clickear() {
    setTimeout(function tempoClick() {
        console.log('You clicked the button!');    
    }, 12000);
});

console.log("Hi!");

setTimeout(function Temporizador() {
    console.log("Click the button!");
}, 15000);

console.log("Welcome to loupe.");