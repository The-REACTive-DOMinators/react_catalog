import { FC } from 'react';
import './styles/main.scss';
import { Phone } from './types/Phone';

interface Props {
  phones: Phone[];
}

export const About: FC<Props> = ({ phones }) => {
  return (
    <div className="container">
      <h2 className="main-title">About</h2>

      {phones.map((phone) => (
        <section className="about-section">
          <h4 className="section-title">{phone.title}</h4>

          <p className="section-text">{phone.text}</p>
        </section>
      ))}
    </div>
  );
};
