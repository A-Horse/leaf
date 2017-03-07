import { Component, Input } from '@angular/core';
import { FeedInterfaceService } from '../../service/feed-interface';

@Component({
  selector: 'atoms',
  templateUrl: './index.html',
  providers: [FeedInterfaceService]
})

export class AtomsComponent {
  atoms = []
  constructor(private feedInterfaceService: FeedInterfaceService) {
    this.getUnReading();
  }

  getUnReading() {
    this.feedInterfaceService.getUnreading(50).subscribe((atoms) => {
      this.atoms = atoms;
    });
  }
}
