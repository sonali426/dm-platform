import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideUpAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideUpAnimation
  ]
})
export class AppComponent {
  title = 'dm-platform';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
