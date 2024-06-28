import { Component } from '@angular/core';
import { ExampleDataService } from '../example-data.service';

// This component uses the default change detection strategy.
// The default change detection strategy checks for changes in every component tree when something changes.
// This can lead to performance issues in large applications.
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // Hierarchical DI: This component provides its own instance of ExampleDataService.
  // This means that any child components will use this instance instead of the one provided at the root level.
  providers: [{ provide: ExampleDataService, useClass: ExampleDataService }]
})
export class MainComponent {
  mainInfo: string = 'Initial Main Info';

  constructor(public exampleDataService: ExampleDataService) {}

  updateMainInfo() {
    this.mainInfo = 'Updated Main Info';
    this.exampleDataService.info = 'Updated Service Info';
  }
}
