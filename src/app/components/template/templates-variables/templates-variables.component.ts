import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';
import { TemplateBidingComponent } from '../template-biding/template-biding.component';

@Component({
  selector: 'app-templates-variables',
  standalone: true,
  imports: [CommonModule,NewComponentComponent,TemplateBidingComponent],
  templateUrl: './templates-variables.component.html',
  styleUrl: './templates-variables.component.scss'
})
export class TemplatesVariablesComponent implements AfterViewInit {

@ViewChild('valor') public valorInput!: ElementRef
@ViewChild(NewComponentComponent) public childInput!: NewComponentComponent;
@ViewChild(TemplateBidingComponent) public templateInput!: TemplateBidingComponent
 ngAfterViewInit(): void{
  console.log(this.valorInput.nativeElement.value);
  console.log(this.childInput.name);
  console.log(this.templateInput.age);
  console.log(this.templateInput.name);
  
  
 }

}
