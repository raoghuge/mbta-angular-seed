import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent {

  constructor(private toaster: ToasterService) { }
  @Input() public users: any[] = [];
  @Output() public submited: EventEmitter<any> = new EventEmitter<any>();
  public user: any = {};

  addUser() {
    if (this.user.firstName && this.user.email && this.user.gender && this.user.contactNo) {
      this.submited.next(this.user);
      this.user = {};
    } else {
      this.toaster.error('Please enter all necessary fields');
    }

  }

}
