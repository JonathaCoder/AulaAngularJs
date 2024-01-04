import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-flow.component.html',
  styleUrl: './template-flow.component.scss'
})
export class TemplateFlowComponent {
public isTrue = true
public name = 'jonatha gagheri'
}
