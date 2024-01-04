import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-biding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-biding.component.html',
  styleUrl: './template-biding.component.scss'
})
export class TemplateBidingComponent { 
 public name = 'esta na tamplate-binding'
 public age = 22
 public isBack = this.age != 22 ? 'red' : 'green'



 public src = 'https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-eagle-wallpaper-nature-image_2669599.jpg'
 public isTextDecoration = this.age >=22 ? 'underline' : 'none'
 constructor(){
setTimeout(() => {
    this.src = 'https://png.pngtree.com/thumb_back/fw800/background/20230605/pngtree-wallpaper-background-for-eagle-image_2881595.jpg'
   }, 1000);
   setTimeout(() => {
    this.src = 'https://d2r9epyceweg5n.cloudfront.net/stores/001/340/690/products/quadro-a-aguia-g1-7ec3428fa912b51ab416673229902337-480-0.jpg'
   }, 2000);
 }

 public sum(){
  return this.age++
 }
 public sub(){
  return this.age--
 }

 public onKeyDown(event:any){
  return console.log(event);
  
 }
 public onMouse (event:MouseEvent){
  return console.log({
    ClientX:event.clientX
  });
  
 }
}
