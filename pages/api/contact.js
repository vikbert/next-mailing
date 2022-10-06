
export default function handler(req, res) {
  require('dotenv').config()

  const senderEmail = 'segentor@gmail.com'
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 25,     
    host: "	smtp.sendgrid.net",
    auth: {
        user: 'next_mailing',
        pass: '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',
      },
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
