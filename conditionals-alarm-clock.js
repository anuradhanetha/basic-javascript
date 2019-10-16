let day = 6;
let onVacation = false;
let alarmRing;

if  (onVacation = true){
    if  (day ==0 ||day == 6) { 
        alarmRing = "off";
    }
    else if ( day >=1 && day <= 5){ 
        alarmRing = "10:00";
    }   
}
else {
if  (day ==0 ||day == 6) { 
    alarmRing = "10:00";
}
else if ( day >=1 && day <= 5){ 
    alarmRing = "7:00";
}   
}
console.log(alarmRing)


