import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { wishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem('To Learn Angular'),
    new wishItem('Get Coffee', true),
    new wishItem('Find a meaning')
  ];
  title = 'wishList';
}
