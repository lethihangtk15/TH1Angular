import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tu-lam3',
  templateUrl: './bai-tu-lam3.component.html',
  styleUrls: ['./bai-tu-lam3.component.css']
})
export class BaiTuLam3Component implements OnInit {

  constructor() { }
sinhvien=[{hoten: 'Nguyen Thi Mai', diemthi:9},{hoten: 'Tran Thi Anh', diemthi:7.5},{ hoten: 'Hoang Thi Dung', diemthi:8.3}];

  ngOnInit(): void {
  }

}
