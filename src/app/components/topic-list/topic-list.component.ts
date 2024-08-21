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
  selectedTopicId = signal<string | null>(null);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopics().subscribe((res) => {
      this.topics.set(res);
    });
  }

  selectTopic(topic: any) {
    this.selectedTopicId.set(topic.id);
  }
}
