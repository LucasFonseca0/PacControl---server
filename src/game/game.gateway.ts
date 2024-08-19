import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  handleConnection(client: Socket) {
    const sessionId = client.handshake.query.sessionId as string;
    console.log(`Client connected with sessionId: ${sessionId}`);
    client.join(sessionId);
    this.gameService.createSession(sessionId, client.id);
  }  


  @SubscribeMessage('startGame')
  handleStartGame(@MessageBody() data: { sessionId: string }): void {
    this.gameService.startGame(data.sessionId);
    console.log(data.sessionId);
    this.server.to(data.sessionId).emit('gameStarted');
  }

  @SubscribeMessage('control')
  handleControl(@MessageBody() data: { action: string, sessionId: string }): void {
    this.server.to(data.sessionId).emit('gameAction', data.action);
    console.log(`Emitindo gameAction para sessionId: ${data.sessionId} com ação: ${data.action}`);
  }

  @SubscribeMessage('testMessage')
  handleTestMessage(@MessageBody() data: { message: string, sessionId: string }): void {
    console.log(`Mensagem recebida de ${data.sessionId}: ${data.message}`);
    this.server.to(data.sessionId).emit('responseMessage', { message: 'Mensagem recebida pelo backend!' });
  }
}
