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
                subject: 'Verify your email | Kwipper',
                text: `Please click on the following link to verify your email: ${url}?token=${token}`,
                html: `<p>Please click on the following link to verify your email: <a href="${url}?token=${token}">Verify Email</a></p>`
            });
        }
    };

module.exports = mailer;