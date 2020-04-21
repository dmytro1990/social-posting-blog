import { Component } from '@angular/core';
import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//---- defining properties ------>
export class AppComponent {
 isBlue: boolean = false;  
 isGray: boolean = false;
 isLarge: boolean = false;
 show: boolean = false;
 title = 'Hello';
 posts = [
   { title: '', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS. `, comments: 12},
   { title: 'New Post1', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS. `, comments: 8},
   { title: 'New Post2', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS.`, comments: 7},
   { title: 'New Post3', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS. `, comments: 5},
   { title: 'New Post4', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS. `, comments: 4},
   { title: 'New Post5', body: `Same as ngStyle the ngClass allows multiple ways to add and toggle our CSS. `, comments: 3},
 ]
 

  classList = {
    blue: this.isBlue,
    gray: this.isGray,
    large: this.isLarge,
  }

  changeBlue(){
    this.classList.blue = !this.classList.blue;
    // * ! *<---- flips value as boolean (opposite)
  }

  changeGray(){
    this.classList.gray = !this.classList.gray;
  }

  changeLarge(){
    this.classList.large = !this.classList.large;
  }

  onNewTitle(event, i) {
    this.posts[i].title = event;
    console.log(event, i);
  }
}
