import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { FormsModule } from '@angular/forms';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HttpService } from 'src/app/service/http.service';
import { mockHttpService } from 'src/app/service/mock-data/http.mock.service';
import { ToasterService } from 'src/app/service/toaster.service';
import { mockToasterService } from 'src/app/service/mock-data/toaster.mock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let stations = [{
    "route": "South Station",
    "line": ["CR-Fairmount", "CR-Worcester", "CR-Franklin", "CR-Greenbush", "CR-Kingston", "CR-Middleborough", "CR-Needham", "CR-Providence", "CR-Foxboro"]
  }, {
    "route": "Newmarket",
    "line": ["CR-Fairmount"]
  }, {
    "route": "Uphams Corner",
    "line": ["CR-Fairmount"]
  }, {
    "route": "Four Corners/Geneva",
    "line": ["CR-Fairmount"]
  }, {
    "route": "Talbot Avenue",
    "line": ["CR-Fairmount"]
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [BookingComponent, BookingDetailComponent],
      providers: [
        { provide: HttpService, useValue: mockHttpService },
        { provide: ToasterService, useValue: mockToasterService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDestination function', () => {
    spyOn(component, 'getDestination');
    component.sourceStations = stations;
    component.onChange(stations[1].route);
    expect(component.getDestination).toHaveBeenCalled();
  });
});
