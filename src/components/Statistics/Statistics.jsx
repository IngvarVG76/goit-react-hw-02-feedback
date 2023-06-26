import { StatisticsWrap, StatisticsText } from 'components';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrap>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>
        Positive feedback percentage: {positivePercentage}%
      </StatisticsText>
    </StatisticsWrap>
  );
};

export default Statistics;
