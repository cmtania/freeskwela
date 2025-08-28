import { Component } from '@angular/core';

@Component({
  selector: 'app-updates',
  imports: [],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent {
 updates: string[] = [
    'New training programs added regularly. Stay tuned for updates!',
  ];
}
