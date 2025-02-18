class EmailService {
    constructor(transporter) {
      this.transporter = transporter;
    }
  
    async send(email) {
      try {
        const info = await this.transporter.sendMail({
          from: email.from,
          to:' brucenshuti2@gmail.com',
          subject: email.subject,
          html: email.body,
        });
        console.log('Email sent:', info.messageId);
        return { success: true, message: 'Email sent successfully' };
      } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email' };
      }
    }
  }
  
  module.exports = EmailService;