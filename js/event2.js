function divClick1() {
    car1.style.filter = `hue-rotate(0deg)`;

    let d = Math.floor(Math.random() * 360);

    car1.style.filter = `hue-rotate(${d}deg)`;
}

function divClick2() {
    car2.style.filter = `hue-rotate(0deg)`;

    let d = Math.floor(Math.random() * 360);

    car2.style.filter = `hue-rotate(${d}deg)`;
}

function divClick3() {
    car3.style.filter = `hue-rotate(0deg)`;

    let d = Math.floor(Math.random() * 360);

    car3.style.filter = `hue-rotate(${d}deg)`;
}

function divClick4() {
    car4.style.filter = `hue-rotate(0deg)`;

    let d = Math.floor(Math.random() * 360);

    car4.style.filter = `hue-rotate(${d}deg)`;
}

let car1 = document.getElementById('f1');
let car2 = document.getElementById('f2');
let car3 = document.getElementById('f3');
let car4 = document.getElementById('f4');

setInterval(divClick1, 10);
divClick1();

setInterval(divClick2, 10);
divClick2();

setInterval(divClick3, 10);
divClick3();

setInterval(divClick4, 10);
divClick4();