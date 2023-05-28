import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { MyIf } from './myIf.directive';
import { ImpurePipe } from './impure.pipe';
import { DrawerComponent } from './app-drawer';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ActionsComponent } from './actions/actions.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    MyIf,
    ImpurePipe,
    DrawerComponent,
    HomeComponent,
    UsersComponent,
    ActionsComponent,
    ProductsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
