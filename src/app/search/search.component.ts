import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  // @Input() defaultSearchCriteria: string = ''; // Optional default search criteria

  @Output() searchTerm = new EventEmitter<string>(); // Define an event emitter
  @Output() clearTriggered = new EventEmitter<any>();

  onSearch(event: Event) {
    event.preventDefault(); // Prevent form submission
    const searchTerm = (event.target as HTMLInputElement).value; // Cast and access value
    this.searchTerm.emit(searchTerm);
    // console.log(searchTerm);
  }
  onClick(htmlInput: HTMLInputElement, e: Event) {
    e.preventDefault();
    this.clearTriggered.emit(htmlInput);
  }
}
