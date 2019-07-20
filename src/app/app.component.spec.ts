import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthComponent } from './component/auth/auth.component';
import { BookingComponent } from './component/booking/booking.component';
import { HistoryComponent } from './component/history/history.component';
import { BookingDetailComponent } from './component/booking/booking-detail/booking-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
        BrowserAnimationsModule, // required
        ToastNotificationsModule.forRoot(),
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        AuthComponent,
        BookingComponent,
        HistoryComponent,
        BookingDetailComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
