import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tu-lam2',
  templateUrl: './bai-tu-lam2.component.html',
  styleUrls: ['./bai-tu-lam2.component.css']
})
export class BaiTuLam2Component implements OnInit {

  constructor() { }
  title="Bài 2: Tính S(x, n) = – x + x^2/2! – x^3/3! + … + (-1)^n * x^n/n!";
x:number;
n:number;
S=1;
giaithua(y:number){
for(let i=1;i<=y;i++)
{
  y*=i;
}
return y
}
  ngOnInit(): void {
    this.x=10;
    this.n=11;
    for(let i=1;i<=(this.n);i++){
      this.S+=Math.pow(-1,(i))*(Math.pow(this.x,i)/this.giaithua(i));
    }
  }

}
