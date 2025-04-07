import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { FormComponent } from '../components/forms/form/form.component';
import { PatternsCounterService } from '../services/patterns-counter.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormComponent, CommonModule],
})
export class HomePage {
  pattersFrequencyData: { pattern: string; count: number }[] = [];
  lettersQuantity: number = 0;

  constructor(private patternsCounterService: PatternsCounterService) {}

  setPatternsFrequencyData(data: {
    strings: string[];
    lettersQuantity: number;
  }) {
    this.pattersFrequencyData =
      this.patternsCounterService.getPatternsFrequency(
        data.strings,
        data.lettersQuantity
      );
    this.lettersQuantity = data.lettersQuantity;

    console.log(this.pattersFrequencyData);
    console.log(this.lettersQuantity);
  }
}
