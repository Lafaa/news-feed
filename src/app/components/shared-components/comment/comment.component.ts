import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
