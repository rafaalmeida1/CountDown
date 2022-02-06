let btnInit = document.getElementById('startCounting');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdown = new Date('03/03/2025 00:00:00').getTime();
let x = setInterval(() => count_down(), second);

function passValue(){
    clearInterval(x);
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('countdown')[0].style.display = 'block';
    let display = document.getElementById('result');
    let date_end = document.form_main.date_end.value;
    countdown = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => count_down(), 15);
}

function count_down(){
    let now = new Date(Date.now()).getTime();
    let diff = countdown - now;

    document.getElementById('dias').innerText = Math.floor(diff / day);
    document.getElementById('horas').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutos').innerText = Math.floor(diff % hour / minute);
    document.getElementById('segundos').innerText = Math.floor(diff % minute / second);
}

function returnHome(){
    document.getElementsByClassName('countdown')[0].style.display = 'none';
    document.getElementsByClassName('container')[0].style.display = 'block';
}

