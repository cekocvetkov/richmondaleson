import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  //THIS IS ONLY FOR IMAGE TESTING
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>("https://jsonplaceholder.typicode.com/photos");
  }
}
