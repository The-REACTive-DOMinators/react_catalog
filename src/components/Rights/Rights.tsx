/* eslint-disable max-len */
import { FC, useEffect } from 'react';
import { GoBack } from '../GoBack/GoBack';
import { BreadCrumbs } from '../ProductPage/BreadCrumbs/BreadCrumbs';
import './Rights.scss';

export const Rights: FC = () => {
  const reload = () => (
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className="global-container rights-container">
      <div className="bread-container">
        <BreadCrumbs />
        <GoBack />
      </div>
      <h1 className="rights_main-title">Consumer Rights</h1>
      <h2 className="rights-second-title">Your Rights as a Consumer</h2>
      <p className="rights-paragraph">
        As a valued customer of our phone store, you have certain rights that protect you and ensure a positive
        shopping experience. We are committed to upholding these rights and providing you with exceptional service.
      </p>
      <h3 className="rights-third-title">1. Right to Quality Products</h3>
      <p className="rights-paragraph">
        We guarantee that all the phones available at our store are of high quality and free from defects. If you
        encounter any issues with the product&apos;s quality or performance, we offer a warranty period during which you can
        request repairs, replacements, or refunds.
      </p>
      <h3 className="rights-third-title">2. Right to Accurate Information</h3>
      <p className="rights-paragraph">
        We believe in transparency and strive to provide you with accurate and complete information about our products.
        This includes details about specifications, features, pricing, and any applicable terms and conditions. If you
        have any questions or need further clarification, our knowledgeable staff is here to assist you.
      </p>
      <h3 className="rights-third-title">3. Right to Consumer Protection</h3>
      <p className="rights-paragraph">
        We comply with consumer protection laws and regulations to ensure your rights are safeguarded. This includes
        fair pricing, clear refund and return policies, protection against misleading advertising, and secure payment
        options. Your satisfaction and trust are of utmost importance to us.
      </p>
      <h3 className="rights-third-title">4. Right to Privacy and Data Protection</h3>
      <p className="rights-paragraph">
        We respect your privacy and take the protection of your personal data seriously. We handle your information
        securely and adhere to applicable data protection laws. Your personal details will only be used for order
        processing, delivery, and communication purposes. We do not share your data with third parties without your
        explicit consent.
      </p>
      <h3 className="rights-third-title">5. Right to Redress and Customer Support</h3>
      <p className="rights-paragraph">
        If you encounter any issues or have concerns regarding your purchase, our dedicated customer support team is
        available to assist you. We will address your queries, provide solutions, and resolve any problems in a prompt
        and satisfactory manner. Your satisfaction is our top priority.
      </p>
      <p className="rights-paragraph last_paragraph">
        These rights are in addition to any statutory consumer rights that may apply in your jurisdiction. We are
        committed to going above and beyond to ensure your shopping experience with us is enjoyable, secure, and
        fulfilling. If you have any further questions or require assistance, please don&apos;t hesitate to reach out to us.
      </p>
    </div>
  );
};
