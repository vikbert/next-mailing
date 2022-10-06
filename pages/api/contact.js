
export default function handler(req, res) {
  require('dotenv').config()

  const senderEmail = 'segentor@gmail.com'
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,     
    host: "smtp-relay.sendinblue.com",
    auth: {
        user: 'segentor@gmail.com',
        pass: 'Gt6YCUB0b2rFHpI5',
      },
    secure: true,
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
