const ampqlib = require('amqplib/callback_api');
require("dotenv").config();

exports.sendNotification = (notification, email) => {
    ampqlib.connect(process.env.RABBITMQ_URL, (err, conn) => {
        if(err) {
            throw err
        }

        conn.createChannel((err, ch) => {
            if(err) {
                throw err
            }

            ch.assertQueue('Notification-Queue');
            const message = {
                notification,
                email
            }


            ch.sendToQueue('Notification-Queue', Buffer.from(JSON.stringify(message)));
            console.log(`::: [x] Sent ${notification} to ${email} :::`);
        });
    })
}