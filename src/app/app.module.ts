import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThunghiemComponent } from './thunghiem/thunghiem.component';
import { FormsModule } from '@angular/forms';
import { BaiTuLam1Component } from './bai-tu-lam1/bai-tu-lam1.component';
import { BaiTuLam2Component } from './bai-tu-lam2/bai-tu-lam2.component';
import { BaiTuLam3Component } from './bai-tu-lam3/bai-tu-lam3.component';
import { BaiTuLam5Component } from './bai-tu-lam5/bai-tu-lam5.component';
import { BaiTuLam6Component } from './bai-tu-lam6/bai-tu-lam6.component';
import { BaiTuLam7Component } from './bai-tu-lam7/bai-tu-lam7.component';
import { BaiTuLam4Component } from './bai-tu-lam4/bai-tu-lam4.component';
import { BaiTuLam8Component } from './bai-tu-lam8/bai-tu-lam8.component';

@NgModule({
  declarations: [
    AppComponent,
    ThunghiemComponent,
    BaiTuLam1Component,
    BaiTuLam2Component,
    BaiTuLam3Component,
    BaiTuLam5Component,
    BaiTuLam6Component,
    BaiTuLam7Component,
    BaiTuLam4Component,
    BaiTuLam8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
