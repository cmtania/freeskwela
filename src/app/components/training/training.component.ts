import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { finalize, take, tap } from 'rxjs';
import { Training } from '../../models/interfaces/training.interface';

@Component({
  selector: 'app-training',
  imports: [CommonModule, FormsModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit {

  constructor(private readonly dataService: DataService) {}

  trainings: Training[] = [];
  filteredTrainings: Training[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(){
    this.dataService.getTrainings().pipe(
      take(1),
      tap((resp: any) => {
        if (resp) {
          this.trainings = resp;
          this.filteredTrainings = resp; // Initialize filtered trainings
          return;
        }
      }),
      finalize(() => {
      })
    ).subscribe();
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value.toLowerCase().trim();
    this.searchTerm = searchTerm;
    this.filterTrainings();
  }

  filterTrainings(): void {
    if (!this.searchTerm) {
      this.filteredTrainings = this.trainings;
      return;
    }

    this.filteredTrainings = this.trainings.filter(training => {
      return (
        training.header?.toLowerCase().includes(this.searchTerm) ||
        training.subheader?.toLowerCase().includes(this.searchTerm) ||
        training.company?.toLowerCase().includes(this.searchTerm) ||
        training.context?.toLowerCase().includes(this.searchTerm) ||
        training.description?.toLowerCase().includes(this.searchTerm) ||
        training.category?.toLowerCase().includes(this.searchTerm) ||
        training.duration?.toLowerCase().includes(this.searchTerm)
      );
    });
  }

  getDaysUntilDeadline(deadline: string): number {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  getDaysUntilEvent(eventDate: string): number {
    const eventDateObj = new Date(eventDate);
    const today = new Date();
    const diffTime = eventDateObj.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  onRegister(training: Training): void {
    window.open(training.link, '_blank');
  }
}
