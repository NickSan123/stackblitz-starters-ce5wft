import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBMvyOa7ab3-g3HWq6pxxr1ppAPBJTnubg',
      authDomain: 'angularlist-da772.firebaseapp.com',
      databaseURL: 'https://angularlist-da772-default-rtdb.firebaseio.com',
      projectId: 'angularlist-da772',
      storageBucket: 'angularlist-da772.appspot.com',
      messagingSenderId: '748169962721',
      appId: '1:748169962721:web:bc802412965ef167fc83a0',
    }),
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [AuthService],
})
export class AppModule {}
