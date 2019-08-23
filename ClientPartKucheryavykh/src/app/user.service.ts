import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './form-enter/form-enter.component';

@Injectable()

export class UserService {

    constructor(private http: HttpClient) {}

    getUser(id: number)
    {
        return this.http.get(`http://localhost:3000/users/${id}`);
    }

    getUserList()
    {
        return this.http.get('http://localhost:3000/users');
    }

    addUser(user: User)
    {
        return this.http.post('http://localhost:3000/users', user);
    }

    changeUser(user: User)
    {
        return this.http.put(`http://localhost:3000/users/${user.id}`, user);
    }
}
