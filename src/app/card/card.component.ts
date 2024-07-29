import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() user: any;
}
