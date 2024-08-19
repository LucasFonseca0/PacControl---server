import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  private sessions = {};

  createSession(sessionId: string, clientId: string) {
    this.sessions[sessionId] = {
      clientId,
      gameStarted: false,
    };
  }

  startGame(sessionId: string) {
    if (this.sessions[sessionId]) {
      this.sessions[sessionId].gameStarted = true;
    }
  }

  getSession(sessionId: string) {
    return this.sessions[sessionId];
  }
}
