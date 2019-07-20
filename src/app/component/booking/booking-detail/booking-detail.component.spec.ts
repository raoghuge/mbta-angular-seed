import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailComponent } from './booking-detail.component';
import { FormsModule } from '@angular/forms';
import { ToasterService } from 'src/app/service/toaster.service';
import { mockToasterService } from 'src/app/service/mock-data/toaster.mock.service';
import { Subscription } from 'rxjs';

describe('BookingDetailComponent', () => {
  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BookingDetailComponent],
      providers: [
        { provide: ToasterService, useValue: mockToasterService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit user added', () => {
    const nativeElement = fixture.nativeElement;
    component.user = {
      firstName: 'Rao',
      email: 'rao.ghuge@gmail.com',
      gender: 'M',
      contactNo: 8689988686
    };
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.submited.subscribe(user => {
      expect(user.firstName).toBe('Rao');
    });
  });
});
