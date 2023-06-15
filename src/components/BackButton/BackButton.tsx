import { Link } from 'react-router-dom';
import { ArrowLeft } from '../../icons/ArrowLeft';
import './BackButton.scss';

export const BackButton = () => (
  <Link to="/" className="back_button">
    <ArrowLeft className="back_button__icon" />

    <p className="back_button__text">Back</p>
  </Link>

);
