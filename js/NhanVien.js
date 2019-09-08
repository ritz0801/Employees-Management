function NhanVien(maNV, hoTenNV, email, matKhau, ngayLam, chucVu) {
    this.maNhanVien = maNV;
    this.hoTenNV = hoTenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.luongCoBan = 400;
    this.tongLuong = 0;

    this.tinhLuong = function() {
        if (this.chucVu === "Sếp") {
            this.tongLuong = this.luongCoBan * 3;
        }
        else if (this.chucVu === "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 1.5;
        }
        else if (this.chucVu === "Nhân viên") {
            this.tongLuong = this.luongCoBan;
        }
    };
}