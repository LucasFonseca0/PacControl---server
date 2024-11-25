import { IoAdapter } from '@nestjs/platform-socket.io'
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'
import { createServer, proxy } from 'aws-serverless-express'
import { Server } from 'http'

const expressApp = express()
let server: Server

export async function handler(event: any, context: any) {
  if (!server) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp)
    )

    const clientUrl = process.env.CLIENT_URL
    console.log('CORS enabled for:', clientUrl)

    app.enableCors({
      origin: clientUrl,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
      allowedHeaders: 'Content-Type, Accept',
    })

    app.useWebSocketAdapter(new IoAdapter(app))
    await app.init()

    server = createServer(expressApp)
  }

  return proxy(server, event, context, 'PROMISE').promise
}
