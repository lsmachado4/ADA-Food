const {receiveMessages} = require('./src/config/rabbitmq')
const nodemailer = require('./src/config/nodemailer');
const emailTemplates = require('./src/emails/template')
const main = () => {
    receiveMessages((message) => {
        const {notification, email} = JSON.parse(message.content.toString())
        // const emailMessage = {
        //     from: 'seu-email@gmail.com',
        //     to: 'elizabeth98@ethereal.email',
        //     subject: 'Conta criada com sucessooooooo!',
        //     text:'Que bom ter vocÊ com a gente! Agora é só fazer seu pedido ;)'
        // }
        const emailToSend = emailTemplates[notification]
        nodemailer.sendMail(emailToSend).then((info) => {
            console.log('Preview URL> ' + info)
        })
        console.log(JSON.parse(message.content.toString()))
    })
}

main()