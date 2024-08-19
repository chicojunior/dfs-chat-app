import { AsyncPipe, JsonPipe } from '@angular/common';
import { DataService } from './../../services/data.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dialog-customer-service',
  standalone: true,
  imports: [MatDialogModule, MatProgressSpinnerModule, AsyncPipe, JsonPipe],
  templateUrl: './dialog-customer-service.component.html',
  styleUrl: './dialog-customer-service.component.scss',
})
export class DialogCustomerServiceComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  title = 'DSF Chat';
  avatarImage: string | undefined;
  // topics: any[] = [];
  topics = signal<any>(null);

  private images: string[] = [
    'assets/images/bear.png',
    'assets/images/chicken.png',
    'assets/images/dog.png',
    'assets/images/giraffe.png',
    'assets/images/meerkat.png',
    'assets/images/rabbit.png',
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.setRandomAvatar();
    this.dataService.getTopics().subscribe((res) => {
      console.log(res);
      this.topics.set(res);
      // this.topics = res;
    });
  }

  private setRandomAvatar(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.avatarImage = this.images[randomIndex];
  }
}
