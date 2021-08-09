import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  public cellSpacing: number[] = [10, 10];
  public panels: any = [
    {
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0, header: '<div>Panel 1</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 2, header: '<div>Panel 2</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 4, header: '<div>Panel 3</div>'
  },
  {
      'sizeX': 4, 'sizeY': 2, 'row': 2, 'col': 0, header: '<div>Panel 4</div>'
  },
  {
      'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 4, header: '<div>Panel 5</div>'
  }
  ];
}
