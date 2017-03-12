import { Component, Input } from '@angular/core';
import { FeedInterfaceService } from '../../service/feed-interface';

@Component({
  selector: 'category',
  templateUrl: './index.html',
  providers: [FeedInterfaceService]
})

export class AtomsComponent {
  category: []
  constructor(private feedInterfaceService: FeedInterfaceService) {
    this.getUnReading();
    console.log('hi');
  }

  getUnReading() {
    const rx = this.feedInterfaceService.getUnreading(50).subscribe((atoms) => {
      this.atoms = atoms;
    });



  }
}
