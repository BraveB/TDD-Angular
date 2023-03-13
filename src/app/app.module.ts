import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/header/header.component';
import { HomeComponent } from './src/components/home/home.component';
import { BookComponent } from './src/components/book/book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents:[BookComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
