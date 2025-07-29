function leapYear(year){
    if(year % 4 ===0 && year %100){
        return true
    }
    if (year % 100 ===0 && year % 400===0){
        return true
    }
    
    return false
}

console.log(leapYear(2028))