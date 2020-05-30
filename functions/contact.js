
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_API_KEY);

exports.handler = async function (event, context, callback) {
  const msg = {
    to: 'geniounico@outlook.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };


  try {
    await sgMail.send(msg);

  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }

}