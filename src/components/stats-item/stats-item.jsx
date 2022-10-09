import PropTypes from 'prop-types';
import { Wrap, StatLabel, StatPercentage } from './stat-item.styled';

export const StatsItem = ({ data: { label, percentage } }) => {
  return (
    <Wrap
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </Wrap>
  );
};

StatsItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
