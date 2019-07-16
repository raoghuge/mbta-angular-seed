import { Station } from './station.model';

export class Booking {

    public userDetails: any[];
    public source: Station;
    public destination: Station;
    public createdAt: number;
    public email: string;

    static createNew() {
        let booking = new Booking();   
        booking.userDetails = [];
        booking.source = new Station('',[]);
        booking.destination = new Station('',[]);
        booking.email = '';
        return booking;
    }
}