var amqp = require('amqplib/callback_api');
const fetch = require('node-fetch');
const fs = require('fs');
fetch('https://prematch.lsports.eu/OddService/EnablePackage?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0').then(res => {
    console.log("First request: ","-----------------------------------------------");
    amqp.connect({
        hostname: "prematch-rmq.lsports.eu",
        port: 5672,
        username: "skillwarecomp@gmail.com",
        password: "h6rt7m34",
        vhost: "Customers",
        heartbeat: 580,
    
    }, function (err, conn) {
        if (err) {
            console.log(err);
            console.log("******************************");
        } else {
            conn.createChannel(function (error1, channel) {
                var queue = '_3415_';
                var decoder  = new TextDecoder("utf-8");
                //channel.assertQueue(queue, { durable: false });
                channel.consume(queue, function (msg) {
                    var value = JSON.parse(decoder.decode(msg.content));
                    if(value.Body){
                        // console.log(value.Body.Events)

                        // if(value.Body.Event['Fixture'].Sport.Name=='Football'){
                        //     console.log('football')
                        // }
                        fs.appendFile("output.json", JSON.stringify(value.Body),function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                         
                            console.log("JSON file has been saved.");
                        })
                        console.log("this is data:");
                        //console.log(value.Body);

                    }
                }, { noAck: true });
            })
        }
    })
    
});