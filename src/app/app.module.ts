import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionEditorComponent } from './instruction-editor/instruction-editor.component';

@NgModule({
  declarations: [AppComponent, InstructionEditorComponent],
  imports: [BrowserModule, AppRoutingModule, QuillModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
