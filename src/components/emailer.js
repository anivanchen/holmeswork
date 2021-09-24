function sendEmail(data) {
  const users = require('../config/users');
  const config = require('../config/config');
  const nodemailer = require('nodemailer');

  var mailOptions = {
    from: 'holmeswork <ichenscripts@gmail.com>',
    cc: users.mailingList,
    subject: 'Homework From Holmes',
    text: `${data}`
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.loginUser,
      pass: config.loginPass
    }
  });
  transporter.sendMail (mailOptions, function (error, info) {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

module.exports = { sendEmail };
