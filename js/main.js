/* 
    - Thêm Nhân Viên
    - Xoá Nhân Viên
    - Sửa Nhân Viên
    - Local Storage
*/

function getEle(id) {
    return document.getElementById(id);
}

function luuVaoLocalStorage() {
    var jsonData = JSON.stringify(mangNhanVien);
    localStorage.setItem("mangNV", jsonData);
}

function layLocalStorage() {
    //Lay ra
    var jsonData = localStorage.getItem("mangNV");

    if (!jsonData) {
        mangNhanVien = [];
        return;
    }

    //Chuyen ve kieu du lieu ban dau
    mangNhanVien = JSON.parse(jsonData);

    hienThi();
}

layLocalStorage();

var mangNhanVien = [];

function themNhanVien() {
    var maNhanVien = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var ngayLam  = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    var nhanVien = new NhanVien(maNhanVien, hoTen, email, password, ngayLam, chucVu);
    nhanVien.tinhLuong();

    mangNhanVien.push(nhanVien);

    luuVaoLocalStorage();
    hienThi();
}

function timViTri(id) {
    for (var i = 0; i < mangNhanVien.length; i++) {
        if (mangNhanVien[i].maNhanVien === id) {
            return i;
        }
    }
    return -1;
}

function xoaNhanVien(e) {
    var button = e.target;
    var id = button.getAttribute("data-id");
    var index = timViTri(id);
    
    //Delete
    mangNhanVien.splice(index, 1);
    
    luuVaoLocalStorage();
    hienThi();
}

function hienThi() {
    var tbodyNhanVien = getEle("tableDanhSach");

    var content = "";
    for (var i = 0; i < mangNhanVien.length; i++) {
        var nhanVien = mangNhanVien[i];

        content += `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.hoTenNV}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>    
                <td>
                    <button onclick="xoaNhanVien(event)" data-id="${nhanVien.maNhanVien}" id="btnXoa" class="btn btn-danger">Xoá</button>
                    <button id="btnSua" class="btn btn-warning">Sửa</button>
                </td>
            </tr>
        `
    }

    tbodyNhanVien.innerHTML = content;
}

//Call function
getEle("btnThemNV").addEventListener("click", function() {
    themNhanVien();
});