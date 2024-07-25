### Bug

With nestjs option, if proto like this :

```
message TestUnaryRequest {
    string message_test_30_100 = 1;
    string message_test = 2;
}
```

`message_test_30_100` will become `messageTest30100` inside generated proto:

```
interface TestUnaryRequest {
  messageTest30100: string;
  messageTest: string;
}
```

but it should be `messageTest_30_100` in order to works with nestjs grpc server, types are wrong

### Reproduce the bug

- `yarn start`
- `grpcurl -plaintext -d '{}' -vv -proto ./hello.proto localhost:3000 hello.HelloService/TestUnary`
- Response contents of grpccurl will contain `message_test` but not `message_test_30_100`
- Then comment out line `13` and uncomment line `16` inside `server-nest/app.controller.ts`
- Re do the test => `message_test` and `message_test_30_100` are in the response
