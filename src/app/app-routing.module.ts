import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './component/booking/booking.component';
import { HistoryComponent } from './component/history/history.component';
import { AuthComponent } from './component/auth/auth.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  // { path: '', component: BookingComponent },
  { path: 'booking-history', component: HistoryComponent },
  { path: '', component: AuthComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
