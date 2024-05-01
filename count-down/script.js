const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector(".giveaway");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");

 const tempDate = new Date();
 const tempYear = tempDate.getFullYear();
 const tempMonth = tempDate.getMonth();
 const tempDay = tempDate.getDate();
 
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveawary ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
    const today = new Date().getTime();
    const time = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(time / oneDay);
    let hours = Math.floor( (time % oneDay) / oneHour);
    let minutes = Math.floor( (time % oneHour) / oneMinute);
    let seconds = Math.floor( (time % oneMinute) / 1000);
    
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
          return ( item = `0${item}`);
        }
        return item;
    }
    items.forEach( function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
      }
}
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();

