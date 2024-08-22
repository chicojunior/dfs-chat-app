import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Assistant, Topic } from '../model/chat-app.model';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAssistants', () => {
    it('should get assistant data', (done) => {
      const mockAssistant: Assistant = {
        id: 1,
        name: 'Mock Assistant',
        isAvailable: true,
      };

      service.getAssistants().subscribe((selectedAssistant) => {
        expect(selectedAssistant).toEqual(mockAssistant);
      });
      done();
    });
  });

  describe('#getTopics', () => {
    it('should get all the topics', (done) => {
      const mockTopics: Topic[] = [
        {
          id: 1,
          name: 'Mock Topic 1',
          subtopics: [
            {
              id: 1,
              name: 'Mock Subtopic 1',
              items: [
                {
                  id: 1,
                  name: 'Item 1',
                  description: 'Description 1',
                },
                {
                  id: 2,
                  name: 'Item 2',
                  description: 'Description 2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: 'Mock Topic 2',
          subtopics: [
            {
              id: 1,
              name: 'Mock Subtopic 1',
              items: [
                {
                  id: 1,
                  name: 'Item 1',
                  description: 'Description 1',
                },
              ],
            },
          ],
        },
      ];

      service.getTopics().subscribe((topics) => {
        expect(topics).toEqual(mockTopics);
      });
      done();
    });
  });
});
