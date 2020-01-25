import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Post } from 'src/app/model/post';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-news-wall',
  templateUrl: './news-wall.component.html',
  styleUrls: ['./news-wall.component.sass']
})
export class NewsWallComponent implements OnInit {

  displayedPosts: Post[];
  numberOfLikes = 0;
  numberOfComments = 0;
  updatesAvailable = false;

  currentUserId = 0;
  currentUserName: string = 'Davide';

  constructor(private newsService: NewsService) {
    this.newsService.newPosts.subscribe(() => {
      this.updatesAvailable = true;
    });
  }

  ngOnInit() {
    this.updatePosts();
    console.log(this.displayedPosts);
  }

  updatePosts() {
    this.displayedPosts = this.newsService.getPosts();
    this.updateNumbers();
    this.updatesAvailable = false;
  }

  updateNumbers() {
    this.numberOfComments = 0;
    this.numberOfLikes = 0;
    this.displayedPosts.forEach(p => {
      p.comments.forEach(c => {
        if (c.authorId === this.currentUserId) {
          this.numberOfComments++;
        }
      });
      if (p.alreadyLiked(this.currentUserId)) {
        this.numberOfLikes++;
      }
    });
  }

  like(p: Post) {
    if (!p.alreadyLiked(this.currentUserId)) {
      this.newsService.like(this.currentUserId, p.postId);
      this.numberOfLikes++;
    }
  }

  comment(text, p: Post) {
    const newComment = new Comment(this.currentUserId, this.currentUserName, text);
    this.newsService.addComment(newComment, p.postId);
    this.numberOfComments++;
  }

}
