import { Component, Input ,  } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css', './media.component.responsive.css']
})
export class CardProjectsComponent {
  @Input()
  refGithub: string=''
  @Input()
  refVizualizar:string=''
  @Input()
  photoCover:string=''
  @Input()
  description:string=''


}
