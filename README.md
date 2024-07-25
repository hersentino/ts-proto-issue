### Bug

If the proto contains a number inside field name, the generated type proto with NestJS option will not match the correct object that we need to return.
For example, for a proto that contains the field name `message_test_30_100`, the correct NestJS return field name should be `messageTest_30_100`, but it is `messageTest30100` in the generated proto files.

The consequense is `message_test_30_100` is not sent back from the server inside the response

### Reproduce the bug

- `yarn start`
- `grpcurl -plaintext -d '{}' -vv -proto ./hello.proto localhost:3000 hello.HelloService/TestUnary`
- Response contents of grpccurl will contain `message_test` but not `message_test_30_100`
- Then comment out line `13` and uncomment line `16` inside `server-nest/app.controller.ts`
- Re do the test => `message_test` and `message_test_30_100` are in the response
