 protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
      --ts_proto_out=. \
      --ts_proto_opt=outputClientImpl=grpc \
      --ts_proto_opt=outputServices=grpc-js \
      --ts_proto_opt=esModuleInterop=true \
      --ts_proto_opt=useDate=string \
      --ts_proto_opt=outputJsonMethods=false \
      --ts_proto_opt=useAbortSignal=true  \
      --ts_proto_opt=nestJs=true \
      --ts_proto_opt=addGrpcMetadata=true \
    hello.proto 