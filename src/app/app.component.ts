import { Component, Input } from '@angular/core';
import { MenuServiceService } from './services/menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public menuService: MenuServiceService) {}

  title = 'assignment3';

}
