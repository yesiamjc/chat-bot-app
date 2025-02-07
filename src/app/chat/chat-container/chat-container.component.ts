import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css'
})
export class ChatContainerComponent {
  constructor(private chatService: ChatService) {}

  handleNewMessage(message: string) {
    // Add user message
    this.chatService.addMessage(message, false);
    
    // Get bot response
    const botResponse = this.chatService.findAnswer(message);
    
    // Add bot message
    this.chatService.addMessage(botResponse, true);
  }
}
