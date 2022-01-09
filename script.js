console.log("hello world")
let date = new Date();
let nextMonth = document.getElementById("next_month");
let prevMonth = document.getElementById("prev_month");
nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    run()
})
prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    run()
})

let run = () => {


    let month = date.getMonth();

    // reference for month
    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    // header section
    const monthDiv = document.querySelector(".head_details_wrapper .month");
    monthDiv.innerHTML = monthList[month]
    const detailsDate = document.querySelector(".details_date");
    detailsDate.innerHTML = date.toDateString();
    let dates = "";
    const datesContainer = document.getElementsByClassName("dates_container");
    let firstDayOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let lastDayOfThePrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    let lastDateOfTheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let lastDayOfTheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let lastDateOfThePrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = lastDayOfThePrevMonth + 1; i > 0; i--) {
        if (firstDayOfTheMonth !== 0) {
            dates += `<div class="prev_date">${lastDateOfThePrevMonth - i + 1}</div>`
        }
    }
    for (let i = 1; i <= lastDateOfTheMonth; i++) {
        // current date highlighter
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            dates += `<div class="dates current_date">${i}</div>`;
        }
        else{
            dates += `<div class="dates" onclick="displayFOrm()">${i}</div>`;
        }
    }
    for (let i = 1; i <= (6 - lastDayOfTheMonth); i++) {
        dates += `<div class="next_date">${i}</div>`
    }
    datesContainer[0].innerHTML = dates;

}
run();

const form = document.getElementById("form");
let cross= document.getElementById("closeForm");

let displayFOrm=()=>{
    form.style.display="flex"
}
cross.addEventListener("click",()=>{
    form.style.display="none"

});
