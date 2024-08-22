import { Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogCustomerServiceComponent } from './components/dialog-customer-service/dialog-customer-service.component';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'DFS Chat';
  dialog = inject(MatDialog);
  isLoading = false;

  private subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog() {
    this.isLoading = true;
    this.subscription.add(
      this.dataService.getAssistants().subscribe((assistant) => {
        this.dialog.open(DialogCustomerServiceComponent, {
          data: {
            assistant,
          },
        });

        this.isLoading = false;
      })
    );
  }
}
