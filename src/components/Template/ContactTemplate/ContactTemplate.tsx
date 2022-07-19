import { StyleWrapper, StyleHead, StyleBody, StyleContainer } from './style';

export type ContactTemplateType = {
  email: string;
  subject: string;
  fullName: string;
  message: string;
};

const ContactTemplate = ({
  email,
  message,
  subject,
  fullName
}: ContactTemplateType) => {
  return (
    <StyleWrapper>
      <StyleContainer>
        <thead>
          <tr>
            <StyleHead align="left">
              <h1 style={{ textAlign: 'left' }}>{subject}</h1>
            </StyleHead>
          </tr>
        </thead>

        <tbody>
          <tr>
            <StyleBody>
              <p>
                <b>Full Name:</b> {fullName}
              </p>
              <p>
                <b>Email:</b> <a href={`mailto:${email}`}>{email}</a>
              </p>

              <br />
              <p>{message}</p>
            </StyleBody>
          </tr>
        </tbody>
      </StyleContainer>
    </StyleWrapper>
  );
};

export default ContactTemplate;
