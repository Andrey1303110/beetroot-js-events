function divClick(e) {
  e.target.style.filter = "hue-rotate(0deg)";

  let d = Math.floor(Math.random() * 360);

  e.target.style.filter = `hue-rotate(${d}deg)`;
}
let car = document.getElementById('f1');

console.log(car);
car.onclick = divClick;

car.addEventListener('wheel', (e) => { //при прокручивании колёка мышки меняется цвет
  divClick(e);
});


