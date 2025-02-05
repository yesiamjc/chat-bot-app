import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';
import { FormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatContainerComponent, FormsModule, ChatModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-bot';
}
