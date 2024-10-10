let namnhuan = +prompt("nhap vao mot nam bat ki")
let a;
if (namnhuan%400 === 0) {
    a = "day la nam nhuan";
} else if (namnhuan%100 === 0  ) {
    a = "khong phai nam nhuan";
} else if (namnhuan%4 === 0  ) {
    a = "day la nam nhuan"
}
else {
    a = "khong phai nam nhuan"
}
alert(a);
