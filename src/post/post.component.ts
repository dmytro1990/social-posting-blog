import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})

export class SinglePost {
    @Input() title: string;
    @Input() comments: number;
    @Input() body: string;
    @Output() newTitle = new EventEmitter<string>();
    editing: boolean = false;

    editTitle() {
        this.editing = true;
    }
    saveTitle() {
        this.newTitle.emit(this.title);
        this.editing = false;
    }
}


// when passing from parent ot child we using ---> []