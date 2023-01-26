import React from 'react';
import PageHeader from '../components/PageHeader';
import { FcApproval } from 'react-icons/fc';

const header = {
  title: 'thank you for your submission!',
  subheader:
    'a member of our team will reach back out within 1-2 business days.',
};

const Confirmation = () => {
  return (
    <div style={{ margin: '8rem auto', padding: '2rem' }}>
      <PageHeader header={header} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FcApproval style={{ fontSize: '100px', margin: '50px' }} />
      </div>
    </div>
  );
};

export default Confirmation;
