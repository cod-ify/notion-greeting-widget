function date() {
    var today = new Date();
    var options = { weekday: 'long' };
    var weekday = new Intl.DateTimeFormat('en-US', options).format(today);
    var day = today.getDate();
    var month = today.toLocaleString('default', { month: 'long' });
    var year = today.getFullYear();
    document.getElementById('date').innerHTML = `${weekday}<br>${month} ${day} ${year}`;
}

function clock() {
    var today = new Date();
    var hour = zeros(twelveHour(today.getHours()));
    var minutes = zeros(today.getMinutes());
    var period = today.getHours() >= 12 ? ' PM' : ' AM';
    hrs = today.getHours();
    var greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    // Get the user's name from local storage
    var name = localStorage.getItem('userName');
    if (!name) {
        name = prompt("Please enter your name:");
        if (name) {
            localStorage.setItem('userName', name);
        }
    }
    if (name) {
        greet += `, ${name}`;
    }

    document.getElementById('greet').innerHTML = greet;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes + period;
}

function twelveHour(hour) {
    if (hour > 12) {
        return hour -= 12;
    } else if (hour === 0) {
        return hour = 12;
    } else {
        return hour;
    }
}

function zeros(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

function dateTime() {
    date();
    clock();
    setTimeout(dateTime, 500);
}

dateTime();

// Light and Dark Mode Support
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (darkMode) {
    document.documentElement.style.setProperty('--bg-color', '#121212');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--card-bg-color', '#333333');
    document.documentElement.style.setProperty('--card-text-color', '#ffffff');
} else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--card-bg-color', '#553c4e');
    document.documentElement.style.setProperty('--card-text-color', '#ffffff');
}
