import { NextApiResponse } from 'next';
import EmailService from '../../services/email';

type Data =
  | string
  | {
      success: boolean;
      error: string | null;
    };

type BodyType = {
  email: string;
  subject: string;
  fullName: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest<BodyType>,
  res: NextApiResponse<Data>
) {
  const { body, method } = req;
  if (method === 'POST') {
    const { fullName, subject, } = body;

    const emailInstance = new EmailService();
    emailInstance.getTemplate('contact', body);

    const { error } = await emailInstance.send({
      subject: `${subject} - ${fullName}`
    });

    if (error) {
      return res.status(500).json({ success: false, error: error ?? '' });
    }

    return res.status(200).json({ success: true, error: null });
  }
  return res.status(404).send('404 not found');
}
