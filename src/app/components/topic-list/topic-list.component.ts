import { Component, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss',
})
export class TopicListComponent {
  topics = signal<any>(null);
  selectedTopic = signal<any>(null);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopics().subscribe((res) => {
      this.topics.set(res);
    });
  }

  selectTopic(topic: any) {
    this.selectedTopic.set(topic);
  }

  // Method to get the ID of the selected topic
  getSelectedTopicId(): number | null {
    return this.selectedTopic().id || null;
  }

  getSubTopics(): any | null {
    return this.selectedTopic().subtopics || null;
  }

  // Track by function to optimize *ngFor rendering
  trackByTopicId(index: number, topic: any): number {
    return topic.id;
  }
}
