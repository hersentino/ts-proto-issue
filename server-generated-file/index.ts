import {
  HelloServiceService,
  TestUnaryRequest,
  TestUnaryResponse,
} from '../hello';
import { Server, ServerCredentials, sendUnaryData } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';

console.log('_m0', _m0);

async function TestUnary(
  call: { request: TestUnaryRequest },
  callback: sendUnaryData<TestUnaryResponse>,
) {
  callback(null, { messageTest30100: 'Hello', messageTest: 'World' });
}

function main() {
  const server = new Server();
  server.addService(HelloServiceService, { testUnary: TestUnary });
  server.bindAsync(
    '0.0.0.0:50052',
    ServerCredentials.createInsecure(),
    (err, port) => {
      if (err != null) {
        console.error(err);
        return;
      }
      console.info(`gRPC listening on ${port}`);
    },
  );
}

main();
