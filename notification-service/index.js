const { receiveMessages } = require('./src/config/rabbitmq.js')
const nodemailer = require('./src/config/nodemailer')
const emailTemplates = require('./src/config/templates')

const main = () => {
    receiveMessages((message) => {
        const { notificationName, email } = JSON.parse(message.content.toString())

        console.log('Received message', JSON.parse(message.content.toString()))

        const sendEmail = emailTemplates[notificationName]

        nodemailer.sendMail(sendEmail).then((info) => {
            console.log('Email sent: ' + info)
        })
    })
}

main()