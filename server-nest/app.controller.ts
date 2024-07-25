import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamCall } from '@nestjs/microservices';
import { interval, map, Observable, take } from 'rxjs';
import { TestUnaryResponse } from '../hello';

@Controller()
export class AppController {
  @GrpcMethod('HelloService', 'TestUnary')
  testUnary(request: any) {
    console.log('request', request);

    // will not work
    // return { messageTest30100: 'Hello', messageTest: 'World' } as TestUnaryResponse;

    // will work
    return { messageTest_30_100: 'Hello', messageTest: 'World' } as unknown as TestUnaryResponse;
  }
}
