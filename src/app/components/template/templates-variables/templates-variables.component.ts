import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';
import { TemplateBidingComponent } from '../template-biding/template-biding.component';
import { TemplateFlowComponent } from '../template-flow/template-flow.component';

@Component({
  selector: 'app-templates-variables',
  standalone: true,
  imports: [CommonModule,NewComponentComponent,TemplateFlowComponent],
  templateUrl: './templates-variables.component.html',
  styleUrl: './templates-variables.component.scss'
})
export class TemplatesVariablesComponent implements AfterViewInit {
  
  @ViewChild(NewComponentComponent) public methodValue!: NewComponentComponent
  @ViewChild('valor') public valorInput!: ElementRef
  ngAfterViewInit(): void {
    console.log(this.valorInput.nativeElement.value);
    console.log(this.methodValue.nomes);
    
  }
  
 }

