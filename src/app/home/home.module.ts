import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule],
  declarations: [HomePage],
})
export class HomePageModule {}
