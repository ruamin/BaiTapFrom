/// <reference path="jquery.min.js" />
function checkInput(id, id_er, mess) {
    $(id).focus(function () {
        var GiaTri = $(id).val();   //lấy giá trị ở ô gọi đến
        $(id).keyup(function () {   //Khi người dùng nhấn phím
            GiaTri = $(id).val();   //Cập nhận giá trị
            if (GiaTri != "") {     //Nếu giá trị bằng
                $(id_er).hide().html("");
                return true;
            } else {
                $(id_er).show().html(mess);
                return false;
            }
        });
    });
    var GiaTri = $(id).val();
    if (GiaTri != null) {
        return true;
    } else
        return false;
}

checkInput("#name", "#err_name", "trống");
checkInput("#name", "#err_name", "trống");
checkInput("#name", "#err_name", "trống");
checkInput("#name", "#err_name", "trống");

$("#Check").click(function () {
    if ($(this).is(":checked")) {
        if (checkAll()) {
            document.getElementById("btnSubmit").disabled = false;
        }
    } else {
    }
});
function checkAll() {
    if (checkInput("#name", "#err_name", "trống")) {
        return true;
    }
    else
        return false;
}