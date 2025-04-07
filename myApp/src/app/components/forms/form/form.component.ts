import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class FormComponent implements OnInit {
  public textForm = new FormGroup({
    string: this.createRequiredControl(),
    string1: this.createRequiredControl(),
    string2: this.createRequiredControl(),
    lettersQuantity: new FormControl(0, [Validators.min(0)]),
  });

  @Output() textSubmitted = new EventEmitter<{
    strings: string[];
    lettersQuantity: number;
  }>();

  submit(): void {
    if (this.textForm.invalid) return;

    const values = this.textForm.value;
    const strings = Object.values(values).slice(0, 3);
    const lettersQuantity = values.lettersQuantity;

    if (lettersQuantity) this.textSubmitted.emit({ strings, lettersQuantity });
  }

  private createRequiredControl(): FormControl {
    return new FormControl('', Validators.required);
  }

  constructor() {}

  ngOnInit() {}
}
