import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../appmodels.model';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  constructor() { }

  @Input() content: Comment;
  @Input() limit: number;
  @Input() completeWords: boolean;

  isContentToggled: boolean;
  nonEditedContent: string;

  ngOnInit() {
    console.log(this.content);
    this.nonEditedContent = this.content.description;
    this.content.description = this.formatContent(this.content.description);
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content.description = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content.description);
  }

  formatContent(content: string) {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(' ');
    }
    return `${content.substr(0, this.limit)}...`;
  }

}
