const ampqlib = require('amqplib/callback_api');
require("dotenv").config();

exports.receiveMessages = (cb) => {
    ampqlib.connect(process.env.RABBITMQ_URL, (err, connection) => {
        if(err) {
            throw err
        }

        connection.createChannel((err, channel) => {
            if(err) {
                throw err
            }

            channel.assertQueue('Notification-Queue');
            channel.consume('Notification-Queue', cb, {
                noAck: true
            });
        });
    })
}