import nodemailer, { SentMessageInfo } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import conf from '../conf.json';
import { API_URI, ApiError, logger } from '../shared';
class MailProvider {
  transporter!: Mail<SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport(
      conf.nodemailer as nodemailer.TransportOptions
    );
  }

  async sendVerification(receiverEmail: string, link: string) {
    try {
      await this.transporter.sendMail({
        from: conf.nodemailer.auth.user,
        to: receiverEmail,
        subject: 'Observer Registration',
        html: `
          <h1>Registration Confirmation Required</h1>
          <div>
            <p>Please, complete your registration process by clicking on the link below.</p>
            <p><a href="${API_URI}/${link}">${API_URI}/${link}</a></p>
          </div>
        `,
      });
    } catch (err: any) {
      logger.error(`nodemailer error. ${err.message}`);
      throw new ApiError(err.message, err.code);
    }
  }
}

const mailProvider = new MailProvider();
export default mailProvider;
