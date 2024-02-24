const amqp = require('amqplib/callback_api');

const receiveMessages = (callback) => {
    amqp.connect('amqp://localhost', (error, connection) => {
        if (error) {
            throw error;
        }

        connection.createChannel((error, channel) => {
            if (error) {
                throw error;
            }

            const queue = 'notification_queue';

            channel.assertQueue(queue);
            channel.consume(queue, callback, { noAck: true });
        });
    })
}

module.exports = { receiveMessages }