import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomPostsGeneratorService {


  private currentPostId = 0;
  private titles = [
    'Lorenzo',
    'Alessandro',
    'Giacomo',
    'Simone',
    'Andrea',
    'Francesca',
    'Maria'
  ];
  private texts = [
    "I'm not sure if I was the first man in space or the last dog.",
    "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
    "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
    "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
    "Never let your sense of morals prevent you from doing what is right.",
    "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
    "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "I'm not dumb. I just have a command of thoroughly useless information.",
    "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
  ];

  posts: Subject<Map<number, Post>> = new Subject<Map<number, Post>>();
  private postsModel: Map<number, Post> = new Map<number, Post>();

  constructor() {
  }

  addComment(c: Comment, postId: number) {
    return new Promise((resolve, reject) => {
      let foundPost = this.postsModel.get(postId);
      if (foundPost === undefined) {
        reject('No such a post!');
      } else {
        foundPost.comments.push(c);
        resolve(true)
      }
    })
  }
  like(userId: number, postId: number) {
    return new Promise((resolve, reject) => {
      let foundPost = this.postsModel.get(postId);
      if (foundPost === undefined) {
        reject('No such a post!');
      } else {
        foundPost.like(userId);
        resolve(true)
      }
    })
  }

  initRandomPosts() {

    for (let i = 0; i < 10; i++) {
      this.addPostToModel();
    }
    this.posts.next(this.postsModel);
    this.generateNewPosts(10000);
  }

  private addPostToModel() {
    let title, textContent, postId, createdOn;
    postId = ++this.currentPostId;
    title = this.titles[this.currentPostId % this.titles.length];
    textContent = this.texts[postId % this.texts.length];
    createdOn = new Date();
    this.postsModel.set(postId, new Post(postId, title, textContent));
  }

  private generateNewPosts(interval: number) {
    setTimeout(() => {
      this.addPostToModel();
      this.posts.next(this.postsModel);
      console.log(this.postsModel);
      this.generateNewPosts(interval + 10000);
    }, interval);
  }
}
