let isim = prompt("İsminizi giriniz.");

let myName = document.querySelector("#myName");
myName.innerHTML = `${isim}`

const dayAndTime = () => {
    const date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = date.getDay()
    let dayName = '';
    let days = (day + 7) % 7;
    switch (days) {
        case 1:
            dayName = 'Pazartesi';
            break;
        case 2:
            dayName = 'Salı';
            break;
        case 3:
            dayName = 'Çarşamba';
            break;
        case 4:
            dayName = 'Perşembe';
            break;
        case 5:
            dayName = 'Cuma';
            break;
        case 6:
            dayName = 'Cumartesi';
            break;
        case 0:
        case 7:
            dayName = 'Pazar';
            break;
    }

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    const timer = `${hour} : ${minute} : ${second} - ${dayName}`;
    document.querySelector('#myClock').innerText = timer;

    setTimeout(dayAndTime, 1000);
}

dayAndTime();