const nodemailer = require('nodemailer');

mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'leonie.koelpin74@ethereal.email',
        pass: 'DGbtSGbKN1x6v5D8yn'
    }
};

module.exports = nodemailer.createTransport(mailConfig);