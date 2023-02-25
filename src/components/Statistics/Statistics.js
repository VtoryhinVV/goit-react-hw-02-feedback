import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatisticList } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      {!good && !neutral && !bad ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticList>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total()}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage()}%</p>
          </li>
        </StatisticList>
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
