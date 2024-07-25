### Test

grpcurl -plaintext -d '{}' -vv -proto ./hello.proto localhost:3000 hello.HelloService/TestUnary
