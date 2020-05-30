
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_API_KEY);

exports.handler = async (event, context) => {
  const { email, subject, message } = JSON.parse(event.body)
  const msg = {
    to: 'geniounico@outlook.com',
    from: email,
    subject,
    text: message,
  };

  try {
    console.log({ event: event.body, context })
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Email has been sent` })
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
