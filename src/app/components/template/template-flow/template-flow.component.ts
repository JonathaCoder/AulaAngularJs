import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, ObservableInput, Observer, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-flow.component.html',
  styleUrl: './template-flow.component.scss'
})
export class TemplateFlowComponent {
public isTrue = true

public itens:Array<{name:string}> = [{name:'jonatha'}];;

public Dados:Observable<string[]> = of([
'maça','cahorro','peru'
]).pipe(delay(3000))


public addName(value: string){
  this.itens.push({name:value})
}
}