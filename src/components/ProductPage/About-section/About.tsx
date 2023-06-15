import { FC } from 'react';
import './styles/main.scss';
import { Summary } from '../../../types/Summary';

interface Props {
  description: Summary['description'];
}

export const About: FC<Props> = ({ description }) => {
  return (
    <div className="container">
      <h2 className="main-title">About</h2>

      {description.map(({ title, text }) => (
        <section className="about-section">
          <h4 className="section-title">{title}</h4>

          <p className="section-text">{text}</p>
        </section>
      ))}
    </div>
  );
};
