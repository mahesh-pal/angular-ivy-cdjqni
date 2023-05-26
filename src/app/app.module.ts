import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { MyIf } from './myIf.directive';
import { ImpurePipe } from './impure.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, HelloComponent, CardComponent, MyIf, ImpurePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
