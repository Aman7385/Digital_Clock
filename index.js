setInterval(() => {
    const d = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
    let hrs = d.getHours();
    let min = d.getMinutes();
    // console.log(min);
    let sec = d.getSeconds();
    let date = d.getDate();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    let yr = d.getFullYear();

    function hour(hrs) {
        var hh;
        if (hrs >= 0 && hrs <= 11) {
            document.getElementById("ampm").innerHTML = "AM";
            if (hrs == 0) {
                hh = 12;
            } else {
                hh = hrs;
            }
        } else if (hrs >= 12 && hrs <= 23) {
            document.getElementById("ampm").innerHTML = "PM";
            if (hrs == 12) {
                hh = 12;
            } else {
                hh = hrs - 12;
            }
        }
        return hh;
    }

    // hours
    let hh = hour(hrs);
    let st1 = hh.toString();
    let arr1 =st1.split('');
    let hours ="";
    if (arr1.length == 1) {
        arr1.unshift("0");
        hours = arr1.join('');
    }else{
        hours = arr1.join('');
    }

// Minutes
    let st2 = min.toString();
    let arr2 = st2.split('');
    let minutes = "";
    if (arr2.length == 1) {
        arr2.unshift("0");
        minutes = arr2.join('');
    }else{
        minutes = arr2.join('');
    }




    let mins = Number.parseInt(minutes);
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("tick").play();
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("yr").innerHTML = yr;
}, 1000);
