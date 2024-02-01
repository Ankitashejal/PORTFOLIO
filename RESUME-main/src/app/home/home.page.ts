import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {logoLinkedin, logoGithub, mailOutline} from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {
    addIcons({logoLinkedin, logoGithub, mailOutline});
  }
}
