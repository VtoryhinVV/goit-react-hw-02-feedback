import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button name={option} type="button" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
