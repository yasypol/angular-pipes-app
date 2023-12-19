import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'Yasira';
  public nameUpper: string = 'Yasira';
  public fullName: string = 'YAsIrA';

  public customDate: Date = new Date();
}
