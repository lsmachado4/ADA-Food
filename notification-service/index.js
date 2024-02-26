const mailService = require('./config/nodemailer');
const ConnectionRabbitmq = require('./config/rabbitmq');
const templates = require('./emails/templates');

class NotificationService {
    constructor(){
        this.ConnectionRabbitmq = new ConnectionRabbitmq();
        this.mailService = mailService;
        this.main();
    }

    sendMail(queue, email) {
        const emailToSend = templates[queue];
        this.mailService.getTransporter().sendMail(emailToSend, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    receiveMessages() {
        this.ConnectionRabbitmq.receiveMessages((message) => {
            const { queue, email } = JSON.parse(message.content.toString());
            this.sendMail(queue, email);
        });
    }

    main() {
        this.receiveMessages();
    }
}

new NotificationService();
