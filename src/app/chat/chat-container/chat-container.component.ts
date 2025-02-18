import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css'] // Note: changed from styleUrl to styleUrls
})
export class ChatContainerComponent {
  constructor(private chatService: ChatService) {}

  handleNewMessage(message: string) {
    this.chatService.addMessage(message, false);
    const botResponse = this.chatService.findAnswer(message);
    this.chatService.addMessage(botResponse, true);
  }
}