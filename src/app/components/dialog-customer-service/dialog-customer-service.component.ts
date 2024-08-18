import { JsonPipe } from '@angular/common';
import { DataService } from './../../services/data.service';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dialog-customer-service',
  standalone: true,
  imports: [MatDialogModule, JsonPipe],
  templateUrl: './dialog-customer-service.component.html',
  styleUrl: './dialog-customer-service.component.scss',
})
export class DialogCustomerServiceComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);

  assistant: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((res) => {
      this.assistant = res;
    });
  }
}
