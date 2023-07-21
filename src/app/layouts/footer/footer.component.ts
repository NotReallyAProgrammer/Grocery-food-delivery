import { Component } from '@angular/core';
import { companyData, servicesData } from './footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  companyData: Array<any> = companyData;
  serviceData = servicesData;
}
