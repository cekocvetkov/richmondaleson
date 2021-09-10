import { Component, OnInit } from '@angular/core';
import { Post } from './models/Post';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

    this.postService.getImages().subscribe((images) => {
      
      for(let i=0;i<this.posts.length; i++){
        this.posts[i].image = images[i].url;
      }
    });
  }

}
