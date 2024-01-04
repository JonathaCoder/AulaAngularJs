import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, ObservableInput, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-flow.component.html',
  styleUrl: './template-flow.component.scss'
})
export class TemplateFlowComponent {
public isTrue = true


public Carregar:Observable<string[]> = of([

'maça','pera','caju','mexirica','melao'

]).pipe(delay(3000));
}