const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const ratioInputs = document.querySelectorAll('.calculating_choose_medium input')
const actBtns = document.querySelectorAll('.calculating_choose_big .calculating_choose-item')
const result_view = document.querySelector('.calculating_result span')
const user = {
    gender: "woman",
    act: "small"
}

genderBtns.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector('.calculating_choose-item_active')
            .classList.remove('calculating_choose-item_active')
        btn.classList.add('calculating_choose-item_active')

        user.gender = btn.getAttribute('data-gender')
    }
})

ratioInputs.forEach((inp) => {
    inp.onkeyup = () => {
        user[inp.id] = inp.value
    }
})

// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) − (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) − (6,775 × возраст в годах);

actBtns.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector('.calculating_choose_big .calculating_choose-item_active')
            .classList.remove('calculating_choose-item_active')
        btn.classList.add('calculating_choose-item_active')

        user.gender = btn.getAttribute('data-gender')
    }
})
ratioInputs.forEach((inp) => {
    inp.onkeyup = () => {
        user[inp.id] = inp.value
    }
})

// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) − (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) − (6,775 × возраст в годах);

actBtns.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector('.calculating_choose_big .calculating_choose-item_active')
            .classList.remove('calculating_choose-item_active')
        btn.classList.add('calculating_choose-item_active')

        user.act = btn.getAttribute('data-act')
        let result = 0

        if (user.gender == "woman") {
            result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)
        } else {
            result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)
        }

        result_view.innerHTML = Math.round(result)
    }
})

const sec = document.getElementById('seconds');
const min = document.getElementById('minutes');
const timer = document.getElementById('hours');
const days = document.getElementById('days');

let interval;
let seconds = 59;
let minutes = 59;
let hours = 23;
let day = 12;

interval = setInterval(() => {
    if (seconds === 0) {
        seconds = 59;
        if (minutes === 0) {
            minutes = 59;
            if (hours === 0) {
                hours = 23;
                day--;
            } else {
                hours--;
            }
        } else {
            minutes--;
        }
    } else {
        seconds--;
    }

    
    days.innerHTML = day < 10 ? '0' + day : day;
    sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    timer.innerHTML = hours < 10 ? '0' + hours : hours;

    
    if (day === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
    }

}, 1000);  
