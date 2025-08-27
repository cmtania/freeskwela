import { Component } from '@angular/core';
import { UpdatesComponent } from '../updates/updates.component';

@Component({
  selector: 'app-announcement',
  imports: [
    UpdatesComponent
],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent {

}
