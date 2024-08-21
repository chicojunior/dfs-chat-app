import { Component, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subtopic, Topic } from '../../model/chat-app.model';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss',
})
export class TopicListComponent {
  topics = signal<Topic[]>([]);
  selectedTopic = signal<Topic>({
    id: 0,
    name: '',
    subtopics: [],
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopics().subscribe((res) => {
      this.topics.set(res);
    });
  }

  selectTopic(topic: any) {
    this.selectedTopic.set(topic);
  }

  getSelectedTopicId(): number {
    return this.selectedTopic().id;
  }

  getSubTopics(): Subtopic[] {
    return this.selectedTopic().subtopics;
  }
}
