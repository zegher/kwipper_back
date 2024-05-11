const nodemailer = require("nodemailer");

const mailer = {
    transporter: nodemailer.createTransport({
        host: "smtp-auth.mailprotect.be",
        secure: true,
        auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
        }
    }),

   sendVerificationEmail: async (email, token) => {
        await mailer.transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verifieer je email adres - Kwipper!",
            text: "your token is " + token,
        });
        //fjlkdqs
    }
}

module.exports = mailer;