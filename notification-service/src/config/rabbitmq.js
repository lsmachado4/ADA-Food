require('dotenv').config();
const amqp = require('amqplib/callback_api');

class ConnectionRabbitmq {
    static connection
    static channel

    receiveMessages = (callback) => {
        try {
            // verificar conexão
            amqp.connect(process.env.urlQueue, (error, connection) => {
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
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ConnectionRabbitmq();