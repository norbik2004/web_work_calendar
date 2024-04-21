const parent_div = document.getElementById("parent_div");
const month_label = document.getElementById("month_label");
const days_of_weeks = {0:"pon.", 1:"wt.",2:"śr.",3:"czw.",4:"pt.",5:"sob.",6:"niedz."};
const months = {1:"Styczeń", 2:"Luty", 3:"Marzec", 4:"Kwiecień", 5:"Maj", 6:"Czerwiec", 7:"Lipiec", 8:"Sierpień", 
9:"Wrzesień", 10:"Październik", 11:"Listopad", 12:"Grudzień"};
const daysInMonth = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
const select_input = document.getElementById("select");
let firstDayOfMonth;
let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();

month_label.innerText = months[month];

function dates(){
    firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    firstDayOfMonth = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1; 
    month_label.innerText = months[month];
}



function createDaysOfWeeksDivs(){
    for(let i = 0; i < 7; i++){
        let child_div = document.createElement('div');
        child_div.className = "days_of_weeks";
        child_div.textContent = days_of_weeks[i];
        parent_div.appendChild(child_div);
    }
}


function createEmptyDivs(){
    for (let i = 0; i < firstDayOfMonth; i++) {
        let empty_div = document.createElement('div');
        parent_div.appendChild(empty_div); 
    }
}

//child_div
function createDivsCalendar() {
    for (let i = 0; i < daysInMonth[month]; i++) {
        let child_div = document.createElement('div');
        let child_div_a = document.createElement("a")
        child_div.className = "child_div";
        child_div.id = i+1
        child_div.textContent = i + 1
        child_div_a.id = (i+1)+"a"
        child_div.appendChild(child_div_a)
        parent_div.appendChild(child_div);
    }
}


function createOptions(){
    for(let i = 0; i<12; i++){
        option = document.createElement('option')
        option.innerText = months[i + 1]
        option.id = (i + 1)
        option.value = (i+1)
        select_input.appendChild(option)
        if(i == month){
            select_input.value = i
        }
    }
}

function main(){
    createDaysOfWeeksDivs()
    createEmptyDivs()
    createDivsCalendar()
    listenerforclick();
}

main()
createOptions()

function listenerforclick(){
    const child_divs_all = document.querySelectorAll(".child_div");
    child_divs_all.forEach(childDiv => {
        childDiv.addEventListener('click', function(){
            child_divs_all.forEach(div => div.classList.remove('clicked'));
            this.classList.toggle('clicked');
            console.log("clicekd div")
        })
    });
}


select_input.addEventListener("change", function() {
    var selectedOptionValue = select_input.value;
    month = selectedOptionValue
    parent_div.innerHTML = ""
    dates()
    main()
});

function updateHiddenInputDay(){
    var day = document.getElementsByClassName("child_div clicked")
    var hiddenInputday = document.getElementById("selected_day")
    hiddenInputday.value = day[0].id
}

// form functions
function updateHiddenInputMonth() {
    var select = document.getElementById('select');
    var hiddenInput = document.getElementById('selected_month');
    hiddenInput.value = select.value;

}
function submitForm(method) {
    updateHiddenInputDay()
    var form = document.getElementById('form');
    form.method = method;
    form.submit();
}


var hiddenInput = document.getElementById('selected_month');
hiddenInput.value = month