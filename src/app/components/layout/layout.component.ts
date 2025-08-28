import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { CountStatusComponent } from "../count-status/count-status.component";
import { TrainingComponent } from '../training/training.component';
@Component({
  selector: 'app-layout.component',
  standalone: true,
  imports: [
    CommonModule,
    AnnouncementComponent,
    CountStatusComponent,
    CountStatusComponent,
    TrainingComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent{

}
