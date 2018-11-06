import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MylistComponent } from './clothes/mylist/mylist.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
