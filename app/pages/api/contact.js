
export default function handler(req, res) {
  require('dotenv').config()

  const senderEmail = 'segentor@gmail.com'
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 1025,
    host: process.env.SMTP_HOST,
    ignoreTLS: true,
    secure: false,
  })

  const mailData = {
    from: senderEmail,
    to: 'segentor@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })
  

  console.log(req.body)
  res.send('success')
}
