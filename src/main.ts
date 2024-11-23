import { IoAdapter } from '@nestjs/platform-socket.io'
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const clientUrl = process.env.CLIENT_URL

  app.enableCors({
    origin: clientUrl,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  })

  app.useWebSocketAdapter(new IoAdapter(app))

  await app.listen(3001)
}
bootstrap()
