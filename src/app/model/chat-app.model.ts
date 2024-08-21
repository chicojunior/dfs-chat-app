export interface Item {
  id: number;
  name: string;
  description: string;
}

export interface Subtopic {
  id: number;
  name: string;
  items: Item[];
}

export interface Topic {
  id: number;
  name: string;
  subtopics: Subtopic[];
}
