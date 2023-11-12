function gettext(num) {
    let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return arr[num]

}

function clock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    minutes = zero(minutes);
    seconds = zero(seconds)
    if (hours > 12) {
        hours = hours - 12
        hours = zero(hours)
    } else if (hours < 10) {
        hours = zero(hours)
    }
    let time = hours + '  :  ' + minutes + '  :  ' + seconds;
    document.getElementById("time").textContent = time;


    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let daily = day + ' - ' + gettext(month)+ ' - ' + year;
    let text = "14 - February - 2023 "
    document.getElementById('day').textContent = text +"  |  "+ daily;
}

function zero(number) {
    return (number < 10 ? "0" : "") + number;
}

setInterval(clock, 1000)