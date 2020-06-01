import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { DeleteUndoComponent } from './delete-undo/delete-undo.component';
import { DeleteUndoService } from './delete-undo/delete-undo.service';

@NgModule({
  declarations: [AppComponent, DeleteUndoComponent],
  imports: [BrowserModule, MatButtonModule],
  providers: [DeleteUndoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
