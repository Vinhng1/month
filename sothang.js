let month = +prompt("enter month");
let month1;
if (month == 2 ) {
    month1 = "28-29 ngay";
} else if (month == 4,6,9,11) {
    month1 = "30 ngay";
} else(month == 1, 3, 5, 7, 8, 10, 12)
{
    month1 = "31 ngay";
}
alert(month1)