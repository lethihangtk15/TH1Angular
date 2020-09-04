import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tu-lam8',
  templateUrl: './bai-tu-lam8.component.html',
  styleUrls: ['./bai-tu-lam8.component.css']
})
export class BaiTuLam8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class HinhTamGiac{
 protected a:number;
 protected b:number;
 protected c:number;
  constructor(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
  }
  public kiemtratamgiac(){
    if(this.a+this.b>this.c&&this.b+this.c>this.a){
      if(this.a+this.c>this.b){
        return true;
      }else return false;
    }else return false;
  }
  public dientich(){
    
  }
}
