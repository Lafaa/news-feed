import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { RandomPostsGeneratorService } from './random-posts-generator.service';
import { Comment } from '../model/comment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private posts: Map<number, Post> = new Map<number, Post>();
  newPosts: Subject<void> = new Subject<void>();

  constructor(private model: RandomPostsGeneratorService) {
    this.model.posts.subscribe((v: Map<number, Post>) => {
      this.posts = v;
      this.newPosts.next();
    });
    this.model.initRandomPosts();
  }

  addComment(c: Comment, postId: number) {
    this.model.addComment(c, postId).then(() => {
      //comment added
    }, (err: Error) => {
      console.error(err.message);
    });
  }

  like(userId: number, postId: number) {
    this.model.like(userId, postId).then(() => {
      //comment added
    }, (err: Error) => {
      console.error(err.message);
    });
  }

  getPosts() {
    return Array.from(this.posts).map(v => v[1]);
  }



}
