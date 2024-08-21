import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TopicListComponent } from '../topic-list/topic-list.component';

@Component({
  selector: 'app-dialog-customer-service',
  standalone: true,
  imports: [MatDialogModule, TopicListComponent],
  templateUrl: './dialog-customer-service.component.html',
  styleUrl: './dialog-customer-service.component.scss',
})
export class DialogCustomerServiceComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  title = 'DSF Chat';
  avatarImage: string | undefined;

  private images: string[] = [
    'assets/images/bear.png',
    'assets/images/chicken.png',
    'assets/images/dog.png',
    'assets/images/giraffe.png',
    'assets/images/meerkat.png',
    'assets/images/rabbit.png',
  ];

  ngOnInit(): void {
    this.setRandomAvatar();
  }

  private setRandomAvatar(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.avatarImage = this.images[randomIndex];
  }
}
