import { IUserModel } from './user.interface';

export interface IAuth {
    token: string;
    user: IUserModel;
}

export interface IBodyLogin {
    username: string;
    password: string;
}
