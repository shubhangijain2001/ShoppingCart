import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowShoppingDetailsComponent } from './show-shopping-details/show-shopping-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ManipulateDetailsComponent } from './manipulate-details/manipulate-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService,MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    ShowShoppingDetailsComponent,
    ManipulateDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    PaginatorModule
   ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
