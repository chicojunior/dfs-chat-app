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
  title = 'DSF Chat';
  assistant = inject(MAT_DIALOG_DATA);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
