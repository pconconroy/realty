const router = require('express').Router()
const nodemailer = require('nodemailer')
module.exports = router

router.post('/', (req, res, next) => {
  console.log('we are here yoooooooo', res)
  const {name, email, subject, message} = req.body

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'testnodemail14@gmail.com',
      pass: process.env.GMAILPW
    }
  })
  let mailOptions = {
    to: 'testnodemail14@gmail.com',

    from: 'testnodemail14@gmail.com',
    subject: `New Inquiry From ${name}: ${subject}`,
    text: message
  }
  transporter.sendMail(mailOptions, function(err) {
    err ? next(err) : res.send('hello')
  })
})
