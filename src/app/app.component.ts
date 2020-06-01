import { Component } from '@angular/core';
import { DeleteUndoService } from './delete-undo/delete-undo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private countDown: DeleteUndoService) {}

  items = [
    // All items are in this object, I suggest using unique ID
    {
      id: 1,
      item: 'Test 1',
    },
    {
      id: 2,
      item: 'Test 2',
    },
    {
      id: 3,
      item: 'Test 3',
    },
  ];

  // Firstly we call our addCountDown service and bind remow function
  // The cound down service is checking whether the undo button is clicked or not
  remove(id) {
    this.countDown.addCountDown(id, this.removeRow.bind(this, id));
  }

  removeRow(id) {
    const index = this.items
      .map((item) => {
        return item.id;
      })
      .indexOf(id); // Find index of our row
    this.items.splice(index, 1);
  }
}
