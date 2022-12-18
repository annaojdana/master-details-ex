import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { UsersApiResponseModel } from '../models/users-api-response.model';
import { UsersModel } from '../models/users.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UsersModel[]> {
    return this._httpClient.get<UsersApiResponseModel<UsersModel[]>>('https://dummyjson.com/users').pipe(
      map((data: UsersApiResponseModel<UsersModel[]>):UsersModel[] => data.users)
    );
  }

  getOne(id: number): Observable<UsersModel> {
    return this._httpClient.get<UsersModel>(
      `https://dummyjson.com/users/${id}`
    );
  }

}


