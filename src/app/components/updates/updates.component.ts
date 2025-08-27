import { Component } from '@angular/core';

@Component({
  selector: 'app-updates',
  imports: [],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent {
 updates: string[] = [
    'We have 2 new hackathons to attend! Check them out!',
  ];
}
