import { Component, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Item, Subtopic, Topic } from '../../model/chat-app.model';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.scss',
})
export class TopicListComponent {
  topics = signal<Topic[]>([]);
  selectedTopic: Topic = {
    id: 0,
    name: '',
    subtopics: [],
  };
  selectedSubtopic: Subtopic = {
    id: 0,
    name: '',
    items: [],
  };
  selectedItem: Item = {
    id: 0,
    name: '',
    description: '',
  };
  showDescription = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTopics().subscribe((res) => {
      this.topics.set(res);
    });
  }

  selectTopic(topic: Topic): void {
    this.selectedTopic = topic;
    this.selectedSubtopic = {
      id: 0,
      name: '',
      items: [],
    };
  }

  selectSubTopic(subtopic: Subtopic): void {
    this.selectedSubtopic = subtopic;
    this.selectedItem = {
      id: 0,
      name: '',
      description: '',
    };
    this.showDescription = false;
  }

  getSelectedId(type: string): number {
    if (type === 'topic') {
      return this.selectedTopic.id;
    } else if (type === 'subtopic') {
      return this.selectedSubtopic.id;
    } else if (type === 'item') {
      return this.selectedItem.id;
    } else {
      throw new Error(`Invalid type: ${type}`);
    }
  }

  getSubTopics(): Subtopic[] {
    return this.selectedTopic.subtopics;
  }

  getItems(): Item[] {
    return this.selectedSubtopic.items;
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
    this.showDescription = true;
  }
}
