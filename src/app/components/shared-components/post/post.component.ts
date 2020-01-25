import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input('post') p: Post;
  @Input() alreadyLiked: boolean;
  @Output() likeClicked = new EventEmitter();
  @Output() comment = new EventEmitter();
  @ViewChild('commentText', { static: false }) commentText: ElementRef;
  showInput = false;

  constructor() {
  }

  ngOnInit() {
  }

  like() {
    this.likeClicked.emit(null);
    this.alreadyLiked = true;
  }
  showComment() {
    this.showInput = true;
  }
  cancel() {
    this.showInput = false;
  }
  sendComment() {
    const valueInput = this.commentText.nativeElement.value
    this.comment.emit(valueInput);
    this.showInput = false;
    this.commentText.nativeElement.value = '';
  }

}
