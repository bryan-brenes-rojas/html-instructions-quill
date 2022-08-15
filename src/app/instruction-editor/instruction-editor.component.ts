import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-instruction-editor',
  templateUrl: './instruction-editor.component.html',
  styleUrls: ['./instruction-editor.component.scss'],
})
export class InstructionEditorComponent implements OnInit {
  @ViewChild(QuillEditorComponent, { static: true })
  quillEditor!: QuillEditorComponent;

  form = new FormGroup({
    text: new FormControl('Hello'),
  });

  htmlText: string = '<p>Test</p>';

  config = {
    toolbar: [
      ['bold', 'italic', 'underline' /*'strike'*/], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      // [{ direction: 'rtl' }], // text direction

      // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
    ],
  };
  constructor() {}

  get formValue() {
    return this.form.value.text;
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.form.value);
    }, 3000);
  }

  log(text: any) {
    console.log(text);
  }

  onSelectionChanged(event: any) {
    console.log(event);
  }

  onContentChanged(event: any) {
    console.log(event);
  }
}
