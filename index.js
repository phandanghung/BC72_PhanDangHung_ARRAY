var numberArr = [];
// thêm mảng
function submit(){
    var Number =document.getElementById("number").value *1;

    if(!isNaN(Number)){
        numberArr.push(Number);

    }else{
        alert("vui lòng nhâp đúng nội dung");
    }
    document.getElementById("hienThi").innerHTML = numberArr;

    document.getElementById("number").value = "";
}
// tổng số dương
function Tong(){
    var SoDuong = 0;
    var tongSoDUong = 0;
    for(var i = 0; i < numberArr.length; i++){
        if(numberArr[i] > 0){
            tongSoDUong += numberArr[i];
            SoDuong++
        }
    }
    console.log(numberArr)
    document.getElementById("hienThiTong").innerHTML = tongSoDUong;
    demSoDuong(SoDuong);
}
//đếm số dương
function demSoDuong(SoDuong){
    document.getElementById("hienThiSoDuong").innerHTML = SoDuong;
    console.log(SoDuong);
}
//tìm số nhỏ nhất
function soNhoNhat(){
    var minNumber = numberArr[0];
    var minPositiveNumber = numberArr[0];
    for(var i = 0;i < numberArr.length; i++){
        if(numberArr[i] < minNumber){
            minNumber = numberArr[i];
        }else if(numberArr[i] < minNumber && minPositiveNumber>= 0){
            minPositiveNumber = numberArr[i];
        }
    }
    console.log(minNumber);
    document.getElementById("hienThiSoNhoNhat").innerHTML = minNumber;
    soDuongNhoNhat(minPositiveNumber)
}
//tìm số dương nhỏ nhất
function soDuongNhoNhat(minPositiveNumber){
    document.getElementById("hienThiSoDuongNhoNhat").innerHTML = minPositiveNumber;
}
// tìm số chẵn cuối cùng
function soChanCuoiCung() {
    var soChanCuoiCung = -1; 

    for (var i = numberArr.length - 1; i >= 0; i--) { 
        if (numberArr[i] % 2 === 0) { 
            soChanCuoiCung = numberArr[i];
            break; 
        }else{
            document.getElementById("hienThiSoChanCuoiCung").innerHTML = -1;
        }
    }

    document.getElementById("hienThiSoChanCuoiCung").innerHTML = soChanCuoiCung;
    console.log(soChanCuoiCung);

}
// sắp xếp mảng
function sapXepTangDan(){
    var sapxepArr = numberArr.slice().sort(function(a, b){
        return a-b;
    });
    document.getElementById("sap-xep-mang-moi").innerHTML = sapxepArr;
}


//đổi chỗ 2 giá trị của mảng
function doiCho() {
    var newArr = numberArr.slice();
    var pos1 = parseInt(document.getElementById("position1").value);
    var pos2 = parseInt(document.getElementById("position2").value);

    if (isNaN(pos1) || isNaN(pos2) || pos1 < 0 || pos2 < 0 || pos1 >= newArr.length || pos2 >= numberArr.length) {
        document.getElementById("doi-cho").innerText = "Vị trí không hợp lệ";
        return;
    }

    var temp = newArr[pos1];
    newArr[pos1] = newArr[pos2];
    newArr[pos2] = temp;

    document.getElementById("doi-cho").innerText = newArr.join(', ');
    console.log(numberArr)
} 
// tìm số nguyên tố đầu tiên
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
function timSoNguyenToDauTien() {
    for (let i = 0; i < numberArr.length; i++) {
        if (isPrime(numberArr[i])) {
            document.getElementById("so-nguyen-to-dau-tien").innerHTML = numberArr[i];
            return; 
        }
    }
    document.getElementById("so-nguyen-to-dau-tien").innerHTML = -1;
}

//tìm số nguyên
var floatArr = [];

function addFloat(){
    var Float = document.getElementById("float").value*1;

    if(!isNaN(Float)){
        floatArr.push(Float);
    }else{
        alert("Vui lòng nhập đúng nội dung");
    }
    document.getElementById("mang-co-so-thuc").innerHTML = floatArr;
    document.getElementById("float").value ="";
}
function timSoNguyen(){
    var soNguyen = 0;
    for(var i = 0; i<floatArr.length;i++){
        if(Number.isInteger(floatArr[i])){
            soNguyen++;
        }
    }
    document.getElementById("so-nguyen").innerHTML = soNguyen;
    console.log(soNguyen);
}

//so sánh
function soSanh(){
    soDuong = 0;
    soAm = 0;
    for( var i = 0; i<numberArr.length; i++){
        if(numberArr[i]<0){
            soAm++;
        }
        if(numberArr[i]>0){
            soDuong++;
        }
    }
    if(soAm > soDuong){
        document.getElementById("hien-thi-so-sanh").innerHTML = "Số Âm > Số Dương";
    }else if(soAm < soDuong){
        document.getElementById("hien-thi-so-sanh").innerHTML = "Số Âm < Số Dương";
    }else{
        document.getElementById("hien-thi-so-sanh").innerHTML = "Số Âm = Số Dương";
    }
}