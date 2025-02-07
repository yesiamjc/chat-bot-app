import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [];

  constructor(private chatService: ChatService) {
    this.messages = this.chatService.getMessages();
  }
}
