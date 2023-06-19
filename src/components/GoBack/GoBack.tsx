import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '../../icons/ArrowLeft';
import './GoBack.scss';

export const GoBack = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className="goback-container">
      <ArrowLeft />
      <button
        onClick={handleOnClick}
        type="button"
        className="goback-container--button"
      >
        Back
      </button>
    </div>
  );
};
