import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import ContactTemplate from 'components/Template/ContactTemplate';

const Contact: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      router.push('/');
    }
  }, [router]);

  return (
    <ContactTemplate
      email="kevin.rivaslive@gmail.com"
      fullName="kevin Rivas"
      message="this is a message"
      subject="start project"
    />
  );
};

export default Contact;
