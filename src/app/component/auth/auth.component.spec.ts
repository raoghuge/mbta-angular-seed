import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { mockHttpService } from 'src/app/service/mock-data/http.mock.service';
import { ToasterService } from 'src/app/service/toaster.service';
import { mockToasterService } from 'src/app/service/mock-data/toaster.mock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule, RouterTestingModule ],
      declarations: [ AuthComponent ],
      providers: [
        { provide: HttpService, useValue: mockHttpService },
        { provide: ToasterService, useValue: mockToasterService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
