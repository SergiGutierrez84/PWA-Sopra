export interface IUserModel {
    id?: any;
    username: string;
    name: string;
    password?: string;
    enabled?: boolean;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
