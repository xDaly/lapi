var amqp = require('amqplib/callback_api');
const fetch = require('node-fetch');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');





//app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'lsportAPI';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

















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
                        fs.writeFile("output.json", JSON.stringify(value.Body),function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                         



                            MongoClient.connect(url, function(err, db) {
                                if (err) throw err;
                                var dbo = db.db("lsportAPI");
                                var myobj = [
                                  (value.Body)
                                ];
                                dbo.collection("prematchOddsService").insertMany(myobj, function(err, res) {
                                  if (err) throw err;
                                  console.log("Number of documents inserted: " + res.insertedCount);
                                  db.close();
                                });
                              });



                            console.log("JSON file has been saved.");
                        })
                        //console.log("this is data:");
                        //console.log(value.Body);

                    }
                }, { noAck: true });
            })
        }
    })
    
});












fetch('https://prematch.lsports.eu/OddService/GetSports?username=skillwarecomp%40gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0').then(res => {
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
                        fs.writeFile("output.json", JSON.stringify(value.Body),function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                         



                            MongoClient.connect(url, function(err, db) {
                                if (err) throw err;
                                var dbo = db.db("getSports");
                                var myobj = [
                                  (value.Body)
                                ];
                                dbo.collection("sportsList").insertMany(myobj, function(err, res) {
                                  if (err) throw err;
                                  console.log("Number of documents inserted: " + res.insertedCount);
                                  db.close();
                                });
                              });



                            console.log("JSON file has been saved.");
                        })
                        //console.log("this is data:");
                        //console.log(value.Body);

                    }
                }, { noAck: true });
            })
        }
    })
    
});
















fetch('https://prematch.lsports.eu/OddService/GetMarkets?username=skillwarecomp%40gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0').then(res => {
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
                        fs.writeFile("output.json", JSON.stringify(value.Body),function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                         



                            MongoClient.connect(url, function(err, db) {
                                if (err) throw err;
                                var dbo = db.db("getMarkets");
                                var myobj = [
                                  (value.Body)
                                ];
                                dbo.collection("MarketsList").insertMany(myobj, function(err, res) {
                                  if (err) throw err;
                                  console.log("Number of documents inserted: " + res.insertedCount);
                                  db.close();
                                });
                              });



                            console.log("JSON file has been saved.");
                        })
                        //console.log("this is data:");
                        //console.log(value.Body);

                    }
                }, { noAck: true });
            })
        }
    })
    
});











fetch('https://prematch.lsports.eu/OddService/GetBookmakers?username=skillwarecomp%40gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0').then(res => {
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
                        fs.writeFile("output.json", JSON.stringify(value.Body),function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                         



                            MongoClient.connect(url, function(err, db) {
                                if (err) throw err;
                                var dbo = db.db("getBookmakers");
                                var myobj = [
                                  (value.Body)
                                ];
                                dbo.collection("bookMarketsList").insertMany(myobj, function(err, res) {
                                  if (err) throw err;
                                  console.log("Number of documents inserted: " + res.insertedCount);
                                  db.close();
                                });
                              });



                            console.log("JSON file has been saved.");
                        })
                        //console.log("this is data:");
                        //console.log(value.Body);

                    }
                }, { noAck: true });
            })
        }
    })
    
});