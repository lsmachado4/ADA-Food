const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        const  mailConfig = {
            //verificar esses dados de acesso
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'laurel0@ethereal.email',
                pass: '45fSfwuG7ubzDpceMG'
            }
        };

        this.transporter = nodemailer.createTransport(mailConfig);
    }

    getTransporter() {
        return this.transporter;
    }
}
const mailService = new MailService();
module.exports = mailService;
