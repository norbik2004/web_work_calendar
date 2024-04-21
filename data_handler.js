const wage = 27.70

function timeToMinutes(timeString) {
    const time = timeString.split(':')
    return parseInt(time[0]) * 60 + parseInt(time[1]);
}
function minutesToHours(timeString){
    const hours = Math.floor(timeString/60)
    const minutes = timeString % 60
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    return formattedHours +":" + formattedMinutes
}

function calculateMoney(timeString){
    let time = timeString.split(':')
    let hours_money = parseInt(time[0]) * wage
    let minutes_money = parseInt(time[1]) / 100 * wage
    return hours_money + minutes_money
}

function fetchData(month) {
    fetch('get_data.php?miesiac=' + month)
    .then(response => response.json())
    .then(data => {
        const days_at_work_element = document.getElementById("days_at_work")
        const time_at_work_element = document.getElementById("time_at_work")
        const money_made_element = document.getElementById('money_made')
        let time_at_work = 0
        let days_at_work = 0
        data.forEach(element => {
            let child_div_a = document.getElementById(element["dzien"] + "a");
            if (child_div_a) {
                let start_hour = element["godzina_startu"]
                let end_hour = element["godzina_zakonczenia"]
                child_div_a.textContent = start_hour + "\n" + end_hour;
                const minutes1 = timeToMinutes(start_hour);
                const minutes2 = timeToMinutes(end_hour);
                time_at_work += minutes2 - minutes1
                days_at_work++;
            } else {
                console.error("Element with ID '" + element["dzien"] + "a' not found.");
            }
        });
        let timehours = minutesToHours(time_at_work)
        days_at_work_element.textContent = "Dni pracy: " + days_at_work
        time_at_work_element.textContent = "Czas pracy: " + timehours
        money_made_element.textContent = "Łączny zarobek: " + calculateMoney(timehours).toFixed(2) + " zł"
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

document.getElementById("select").addEventListener("change", function() {
    const selectedMonth = this.value;
    fetchData(selectedMonth);
});

document.addEventListener("DOMContentLoaded", function() {
    let date = new Date();
    const initialMonth = date.getMonth() +1;
    fetchData(initialMonth);
});