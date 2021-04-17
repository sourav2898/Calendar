const date = new Date();
document.querySelector('.date p').innerHTML = date.toDateString();
const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector('.days');

    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    const prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDay = date.getDay();

    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

    const months = [
        "January",
        'February',
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber"
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    
    let days ='';

    for(let x = firstDay; x>0; x--){
        days += `<div class="prev_date"> ${prevLastDate - x + 1} </div>`;
    }

    for(let i=1;i<=lastDate;i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today"> ${i} </div>`;
        }
        else{
            days += `<div> ${i} </div>`;
        }
    }

    for(let y = 5; y>=lastDay;y--){
        days += `<div class="next_date"> ${6 - y} </div>`;
        monthDays.innerHTML = days;
    }
}

document.querySelector('.prev').addEventListener('click', ()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();