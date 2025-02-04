import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  imports: [ FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css'
})
export class MessageInputComponent {
  @Output() sendMessage = new EventEmitter<string>();
  userInput: string = '';

  onSendMessage() {
    if (this.userInput.trim()) {
      this.sendMessage.emit(this.userInput);
      this.userInput = ''; 
    }
  }
}
