import { Injectable } from '@angular/core';

import { IUserModel } from '../../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public get users(): IUserModel[] {
        return [
            { id: 1, username: 'user1', token: 'b5249743-e9ae-4573-87d7-83780d968d19', name: 'Usuario 1'},
            { id: 2, username: 'user2', token: 'ce804e28-959a-4de9-981b-4897f5dbc365', name: 'Usuario 2'},
            { id: 3, username: 'user3', token: 'bb3df13a-60d3-4f9f-a553-55108dc04be6', name: 'Usuario 3'},
            { id: 4, username: 'user4', token: '2bc28102-7cb7-4e88-a96b-1a232b62ece4', name: 'Usuario 4'},
        ];
    }

    public getUser(property: string, value: string): IUserModel {
        return this.users.find(user => user[property] === value);
    }
}
