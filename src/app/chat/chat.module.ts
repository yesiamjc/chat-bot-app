import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { MessageInputComponent } from './message-input/message-input.component';

@NgModule({
  declarations: [
    ChatContainerComponent,
    MessageListComponent,
    MessageComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule, 
    FormsModule 
  ],
  exports: [
    ChatContainerComponent  
  ]
})
export class ChatModule { }