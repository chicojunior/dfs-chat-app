import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Item, Subtopic, Topic } from '../../model/chat-app.model';
import { TopicListComponent } from './topic-list.component';

describe('TopicListComponent', () => {
  let component: TopicListComponent;
  let fixture: ComponentFixture<TopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#setSelected', () => {
    it('should set selected topic', () => {
      const mockSelectedTopic: Topic = {
        id: 1,
        name: 'Selected Topic',
        subtopics: [],
      };

      component.selectTopic(mockSelectedTopic);

      expect(component.selectedTopic).toEqual(mockSelectedTopic);
    });

    it('should set selected subtopic', () => {
      const mockSelectedSubtopic: Subtopic = {
        id: 1,
        name: 'Selected Subtopic',
        items: [],
      };

      component.selectSubTopic(mockSelectedSubtopic);

      expect(component.selectedSubtopic).toEqual(mockSelectedSubtopic);
    });

    it('should set selected item', () => {
      const mockSelectedItem: Item = {
        id: 1,
        name: 'Selected Item',
        description: 'Selected item description',
      };

      component.selectItem(mockSelectedItem);

      expect(component.selectedItem).toEqual(mockSelectedItem);
    });
  });

  describe('#getSelectedId', () => {
    beforeEach(() => {
      component.selectedTopic = {
        id: 1,
        name: 'Selected Topic',
        subtopics: [],
      };
      component.selectedSubtopic = {
        id: 2,
        name: 'Selected Subtopic',
        items: [],
      };
      component.selectedItem = {
        id: 3,
        name: 'Selected Item',
        description: 'Selected item description',
      };
    });

    it('should get topic id', () => {
      const topicId = component.getSelectedId('topic');

      expect(topicId).toBe(1);
    });

    it('should get subtopic id', () => {
      const subtopicId = component.getSelectedId('subtopic');

      expect(subtopicId).toBe(2);
    });

    it('should get item id', () => {
      const itemId = component.getSelectedId('item');

      expect(itemId).toBe(3);
    });

    it('should throw an error when type is invalid', () => {
      const invalidType = 'invalidType';
      expect(() => component.getSelectedId(invalidType)).toThrowError(
        `Invalid type: ${invalidType}`
      );
    });
  });
});
