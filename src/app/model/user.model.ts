import { Gender } from './enum/gender.enum';

export class User {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public email: string;
    public token: string;
}
