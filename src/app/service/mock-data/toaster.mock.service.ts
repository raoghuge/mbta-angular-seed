import { ToasterService } from "../toaster.service";

class MockToasterService {
    public success(msg: string): void {}
    public error(msg: string): void {}
}
export const mockToasterService: ToasterService = (new MockToasterService()) as any;
