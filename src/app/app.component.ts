import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBidingComponent } from './components/template/template-biding/template-biding.component';
import { TemplatesVariablesComponent } from './components/template/templates-variables/templates-variables.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent,TemplateBidingComponent, TemplatesVariablesComponent],
  template: `<h1>ola</h1>

   <h3>teste</h3>
  <app-new-component/>
  <app-template-biding/>
  <app-templates-variables/>
   





  `,
  


})

export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
