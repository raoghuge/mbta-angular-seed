import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private currentUser: any;
  public history: any[];
  constructor(private service: HttpService) {
    
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user')) || {};
    this.getHistory();
  }

  private getHistory() {
    this.service.get('archive?email=' + this.currentUser.email)
      .subscribe(res => {
        if (res && res['code'] === 200) {
          this.history = res['data'];
        }
      }, err => {
          console.log(err);
    });
  }

}
