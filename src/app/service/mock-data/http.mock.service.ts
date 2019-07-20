import { HttpService } from '../http.service';
import { Observable, of } from 'rxjs';

class MockHttpService {
    public login(user) { }
    public register(user) { }
    public get(url) { return of([]); }
    public post(url, data) { }
}

export const mockHttpService: HttpService = (new MockHttpService()) as any;