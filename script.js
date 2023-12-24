//your JS code here. If required.
function daysOfAYear(year) {
	if(year%4 === 0){
		if(year % 100 === 0 && year % 400 !== 0){
			return 365;
		}else{
			return 366;
		}
	}else{
		return 365;
	}
}

const year = prompt("Enter Year: ");
alert(daysOfAYear(year));