import capitalizeFirstLetter from '../../helpers/helpers';
import { Feedback, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      {options.map(option => (
        <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {capitalizeFirstLetter(option)}
        </FeedbackBtn>
      ))}
    </Feedback>
  );
};

export default FeedbackOptions;
