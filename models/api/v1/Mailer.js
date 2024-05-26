const nodemailer = require('nodemailer');
//fjlkqsjdflk
const mailer = {
    transporter: nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    }),

    async sendVerificationEmail(email, token) {
        const url = 'YOUR_FRONTEND_VERIFICATION_URL_HERE'

            this.transporter.sendMail({
                from: process.env.EMAIL,
                to: email,
                subject: 'Verifieer jouw email | Kwipper',
                text: `Hey! Je moet nog één ding doen voor je kan beginnen broswen! Klik op de volgende link op jouw e-mail te verifieren: ${url}?token=${token} Hopelijk tot snel! Groetjes het Kwipper-team!`,
                html: `<p>Hey! <br> <br> Je moet nog één ding doen voor je kan beginnen browsen! <br> <br> Klik op de volgende link op jouw e-mail te verifieren: <br> <br>  <a href="${url}?token=${token}">Verify Email</a> <br> <br> Hopelijk tot snel! <br> Groetjes het Kwipper-team! </p>`
            });
        }
    };

module.exports = mailer;
//mail send should now come from  hallo@kwipper.be - 26/05/2024 (poging 2)