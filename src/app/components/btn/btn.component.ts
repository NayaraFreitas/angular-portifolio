import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css', './media.component.responsive.css']
})

export class BtnComponent {
  @Input()
  contentTitle:string = ''
}
