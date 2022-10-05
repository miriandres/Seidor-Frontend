import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private translate: TranslateService){
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
  }
}
