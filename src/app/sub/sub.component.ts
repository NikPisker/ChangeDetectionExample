import {
  Component,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { ExampleDataService } from '../example-data.service';

// This component uses the OnPush change detection strategy.
// The OnPush strategy only checks for changes in the component when its @Input() properties change, or when events are fired from within the component.
// This can lead to performance improvements in large applications.
@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Hierarchical DI: This component provides its own instance of ExampleDataService.
  // This means that any child components will use this instance instead of the one provided at the parent or root level.
  providers: [{ provide: ExampleDataService, useClass: ExampleDataService }]
})
export class SubComponent implements OnChanges {
  @Input() subInfo: string= '';

  constructor(public exampleDataService: ExampleDataService) {}

  updateSubInfo() {
    this.subInfo = 'Updated Sub Info';
    this.exampleDataService.info = 'Updated Service Info';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subInfo']) {
      console.log('subInfo changed');
    }
  }
}
