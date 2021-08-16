const router = require('express').Router();

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dlin3740@gmail.com',
    pass: "aa"
  }
});

router.post('/send', async(req, res) => {
    let { message, name } = req.body;

    // let mailOptions = {
    //     from: 'dlin3740@gmail.com',
    //     to: 'dlin3738@gmail.com',
    //     subject: name,
    //     text: message
    //   };
      
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //       console.log(error);
    //       res.sendStatus(500);
    //   } else {
    //       console.log('Email sent: ' + info.response);
    //       res.sendStatus(200);
    //   }
    // });
    res.status(201).json({ resultCode: 0 });
})

module.exports = router;