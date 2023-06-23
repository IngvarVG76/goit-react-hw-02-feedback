import capitalizeFirstLetter from '../../helpers/helpers';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {capitalizeFirstLetter(option)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;