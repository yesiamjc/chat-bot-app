import { Injectable } from '@angular/core';
import { qaData } from '../data/qa-data';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: Message[] = [];

  findAnswer(question: string): string {
    const qa = qaData.find(qa => 
      qa.question.toLowerCase() === question.toLowerCase()
    );
    return qa ? qa.answer : "I'm sorry, I don't have an answer for that question.";
  }

  addMessage(text: string, isBot: boolean): void {
    const message: Message = {
      text,
      isBot,
      timestamp: new Date()
    };  
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }
}
