import PropTypes from 'prop-types';
import { Wrap, StatLabel, StatPercentage } from './stat-item.styled';

export const StatsItem = ({ data: { label, percentage } }) => {
  return (
    <Wrap>
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
