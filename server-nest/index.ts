import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const pathproto = join(process.cwd(), './hello.proto');

  const grpcServer = await NestFactory.createMicroservice<GrpcOptions>(
    AppModule,
    {
      bufferLogs: true,
      transport: Transport.GRPC,
      options: {
        package: ['hello'],
        protoPath: [pathproto],
        url: `0.0.0.0:3000`,
        loader: {
          longs: Number,
        },
      },
    },
  );
  grpcServer.listen();
}

bootstrap();
