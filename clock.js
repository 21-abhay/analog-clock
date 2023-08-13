let s = 0;
let m = 0;
let h = 0;
let key = true;
let intervalid;
let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');
let hr_hand = document.getElementById('hour-hand');
let min_hand = document.getElementById('minute-hand');
let sec_hand = document.getElementById('second-hand');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let h1;
let m1;
let s1;

function setTime() {
    let dt = new Date();
    h1 = dt.getHours()*30;
    m1 = dt.getMinutes()*6;
    s1 = dt.getSeconds()*6;
    // sec_hand.style.transform = `rotate(${s1 * 6}deg)`;
    // min_hand.style.transform = `rotate(${m1*6}deg)`;
    // hr_hand.style.transform = `rotate(${h1 * 30}deg)`;
}

function update() {
    let dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    h1=h1+0.1/60;
    m1=m1+0.1;
    s1=s1+6;
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    sec_hand.style.transform = `rotate(${s1}deg)`;
    min_hand.style.transform = `rotate(${m1}deg)`;
    hr_hand.style.transform = `rotate(${h1}deg)`;
}

setTime();
setInterval(update, 1000);


// function stopwatch() {
//     time();
//     // countDown();
//     sec.innerHTML = s;
//     min.innerHTML = m;
//     hr.innerHTML = h;
// }

// function time() {
//     s = s + 1;
//     if (s == 60) {
//         s = 0;
//         m = m + 1;
//     }
//     if (m == 60) {
//         m = 0;
//         h = h + 1;
//     }
// }

// function stoprunning() {
//     clearInterval(intervalid);
//     key = true;
// }

// function StartStopwatch() {
//     if (key) {
//         intervalid = setInterval(stopwatch, 1000);
//         key = false;
//     }
// }