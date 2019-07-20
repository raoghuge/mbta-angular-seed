import { Injectable } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';

/**
 * Exports `ToasterService` which handles the notification on UI. 
 * `ngx-toast-notification` is used to display notification
 */
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster: Toaster) { }

  /**
   * Show success toaster with success flag
   * @param msg Message to display .
   */
  public success(msg: string): void {
    this.open(msg, 'success');
  }

  /**
   * Show success toaster with error flad
   * @param msg Message to display.
   */
  public error(msg: string): void {
    this.open(msg, 'danger');
  }

  /**
   * Show toaster with option provided.
   * Also add token to the header.
   * @param msg Message to display.
   * @param option type of toaster. ('success' or 'danger')
   */
  private open(msg: any, option: any): void {
    this.toaster.open({
      text: msg,
      caption: ' ',
      type: option 
    });
  }
  
}
