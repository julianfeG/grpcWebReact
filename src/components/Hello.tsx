import React, { useState, useEffect } from 'react';
import { HelloWorldServiceClient } from '../proto/generated/proto/hello_pb_service';
import { HelloRequest, HelloResponse } from '../proto/generated/proto/hello_pb';
import { environment } from '../environments/environment';

function MiComponente() {
    const [responseText, setResponseText] = useState('');

    const callHelloService = () => {
        const client = new HelloWorldServiceClient(environment.endpoint_server_grpc);

        const request = new HelloRequest();
        request.setText('Hello ');

        client.hello(request, (err, response: HelloResponse | null) => {
            if (!err) {
                setResponseText(response!.getText());
            } else {
                console.error('Error en la solicitud gRPC:', err);
            }
        });
    };

    useEffect(() => {
        callHelloService();
    }, []);

    return (
        <div>
            <h1>GRPC React</h1>
            <p>{responseText}</p> {}
        </div>
    );
}

export default MiComponente;
