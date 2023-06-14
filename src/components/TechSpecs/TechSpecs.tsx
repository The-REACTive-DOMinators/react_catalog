/* eslint-disable quote-props */
import { FC } from 'react';
import './styles/main.scss';
import { Chars } from './Chars';

interface Props {
  chars: Chars
}

export const TechSpecs: FC<Props> = ({ chars }) => {
  const specNames = Object.keys(chars);

  return (
    <div className="container">
      <h2 className="main-title">Tech specs</h2>

      {specNames.map((key) => (
        <section className="char" key={key}>
          <p className="name">{key}</p>
          <p className="value">{chars[key as keyof Chars]}</p>
        </section>
      ))}
    </div>
  );
};
