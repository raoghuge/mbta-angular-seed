import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Booking } from 'src/app/model/booking.model';
import { Station } from 'src/app/model/station.model';
import { ToasterService } from 'src/app/service/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public booking: Booking;
  public sourceStations: any[] = [];
  public destinationStations: any[] = [];
  public currentUser;
  constructor(private service: HttpService, private toaster: ToasterService, private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user')) || {};
    this.initBooking();
    this.getSource();
  }

  private initBooking(): void {
    this.booking = Booking.createNew();
    this.booking.email = this.currentUser.email;
  }

  private getSource(): void {
    this.service.get('station/all')
      .subscribe(res => {
        if (res['code'] === 200) {
          this.sourceStations = res['data'];
        }
      }, err => {
          this.toaster.error('Failed to load stations');
      })
  }

  public onChange(val): void {
    let newSource: Station = this.sourceStations.find(el => el.route === val);
    this.booking.source = new Station(newSource.route, newSource.line);
    let sourceLine: string = newSource.line.join(",");
    this.getDestination(sourceLine);
  }

  public getDestination(sourceLine){
    this.service.get('station/on_same_line?line=' + sourceLine)
      .subscribe(res => {
        if (res['code'] === 200 && res['data']) {
          this.destinationStations = res['data'].map(e => new Station(e.route, e.line));
        }
      }, err => {
        this.toaster.error('Failed to load desitnation stations');
      });
  }

  public submited(data): void {
    this.booking.userDetails.push(data);
    this.booking.userDetails = [...this.booking.userDetails];
  }

  public destinationChanged(val): void {
    let newSource: Station = this.sourceStations.find(el => el.route === val);
    this.booking.destination = new Station(newSource.route, newSource.line);
  }

  public save(): void {
    if (this.booking.userDetails.length > 0 && this.booking.source && this.booking.destination) {
      this.service.post('archive', this.booking)
        .subscribe(res => {
          if (res['code'] === 200 && res['data']) { 
            this.toaster.success('Booking is done');
            this.initBooking();
            this.router.navigate(['/booking-history']);
          }
        }, err => {
            this.toaster.error('Failed to save');
      })
    } else {
      this.toaster.error('Please provide all details');
    }
  }

}
