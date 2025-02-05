import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ChatService } from '../services/chat.service';
import { Message } from '../models/message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  imports: [ MessageComponent, FormsModule, CommonModule ],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [];

  constructor(private chatService: ChatService) {
    this.messages = this.chatService.getMessages();
  }
}
