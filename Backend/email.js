class Email {
    constructor(from, to, subject, body) {
      this.from = 'brucenshuti2@gmail.com';
      this.to = 'brucenshuti2@gmail.com';
      this.subject = subject;
      this.body = body;
    }
  
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  module.exports = Email;