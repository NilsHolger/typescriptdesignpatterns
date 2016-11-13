import { Component, Input } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'Technologies in Motion';
  user = '';

  constructor(private userService : UserService) { this.user = userService.userName; }


}
