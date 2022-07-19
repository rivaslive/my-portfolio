import nodemailer from 'nodemailer';
import { ContactTemplateType } from 'components/Template/ContactTemplate';
import type { TemplateType } from './templates';
import * as templates from './templates';

const isProd = process.env.NODE_ENV === 'production';

const options = {
  production: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  },
  default: {
    service: 'gmail',
    port: 25, // Postfix uses port 25
    host: 'localhost',
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  }
};

const transporter = nodemailer.createTransport(
  isProd ? options.production : options.default
);

type SendEmailType = {
  to?: string;
  from?: string;
  subject?: string;
  attachments?: any[];
};

export default class EmailService {
  private html: string = '';

  constructor() {}

  getTemplate(key: TemplateType, props: ContactTemplateType) {
    const template = templates[key](props);
    this.html = template;
    return template;
  }

  async send(mailOptions: SendEmailType) {
    const { html } = this;
    if (!html)
      return {
        data: null,
        error: 'html not found'
      };
    try {
      const data = await transporter.sendMail({
        html,
        from: '"My Portfolio" <rivaslive.notification@gmail.com>',
        text: 'Contact Message',
        ...mailOptions
      });
      return {
        data,
        error: null
      };
    } catch (e) {
      console.error(e);
      return {
        data: null,
        // @ts-ignore
        error: e?.message as string
      };
    }
  }
}
